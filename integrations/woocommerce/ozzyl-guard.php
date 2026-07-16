<?php
/**
 * Plugin Name: Ozzyl Guard for WooCommerce
 * Description: COD risk assessment and outcome feedback through the canonical Ozzyl Guard API.
 * Version: 1.0.0
 * Requires PHP: 8.0
 * Requires Plugins: woocommerce
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

final class Ozzyl_Guard_WooCommerce
{
    private const API_URL = 'ozzyl_guard_api_url';
    private const KEY_PAYLOAD = 'ozzyl_guard_key_payload';
    private const KEY_PREFIX = 'ozzyl_guard_key_prefix';
    private const ENABLED = 'ozzyl_guard_enabled';
    private const COD_ONLY = 'ozzyl_guard_cod_only';
    private const ASSESS_HOOK = 'ozzyl_guard_assess_order';
    private const OUTCOME_HOOK = 'ozzyl_guard_submit_outcome';

    public static function boot(): void
    {
        add_action('admin_menu', [self::class, 'register_menu']);
        add_action('admin_init', [self::class, 'register_settings']);
        add_action('woocommerce_checkout_order_created', [self::class, 'schedule_assessment']);
        add_action(self::ASSESS_HOOK, [self::class, 'assess_order']);
        add_action(self::OUTCOME_HOOK, [self::class, 'submit_outcome']);
        add_action('woocommerce_order_status_changed', [self::class, 'schedule_outcome'], 10, 4);
        add_action('woocommerce_admin_order_data_after_order_details', [self::class, 'render_order_panel']);
        add_action('admin_post_ozzyl_guard_recheck', [self::class, 'manual_recheck']);
    }

    public static function register_menu(): void
    {
        add_submenu_page('woocommerce', 'Ozzyl Guard', 'Ozzyl Guard', 'manage_woocommerce', 'ozzyl-guard', [self::class, 'render_settings_page']);
    }

    public static function register_settings(): void
    {
        register_setting('ozzyl_guard', self::API_URL, [
            'type' => 'string',
            'sanitize_callback' => [self::class, 'sanitize_api_url'],
            'default' => 'https://api.ozzyl.com',
        ]);
        register_setting('ozzyl_guard', self::ENABLED, [
            'type' => 'string',
            'sanitize_callback' => static fn($value): string => $value === 'yes' ? 'yes' : 'no',
            'default' => 'no',
        ]);
        register_setting('ozzyl_guard', self::COD_ONLY, [
            'type' => 'string',
            'sanitize_callback' => static fn($value): string => $value === 'no' ? 'no' : 'yes',
            'default' => 'yes',
        ]);

        if (isset($_POST['ozzyl_guard_new_key']) && check_admin_referer('ozzyl_guard-options')) {
            $raw = sanitize_text_field(wp_unslash($_POST['ozzyl_guard_new_key']));
            if ($raw !== '') {
                $validPrefix = str_starts_with($raw, 'ozg_' . 'test_') || str_starts_with($raw, 'ozg_' . 'live_');
                if (!$validPrefix || strlen($raw) < 32) {
                    add_settings_error('ozzyl_guard', 'invalid_key', 'The service key format is invalid.');
                } else {
                    update_option(self::KEY_PAYLOAD, self::encrypt_value($raw), false);
                    update_option(self::KEY_PREFIX, substr($raw, 0, 17) . '…', false);
                }
            }
        }
    }

    public static function sanitize_api_url($value): string
    {
        $url = untrailingslashit(esc_url_raw((string) $value));
        if (!str_starts_with($url, 'https://')) {
            add_settings_error('ozzyl_guard', 'invalid_url', 'The API URL must use HTTPS.');
            return 'https://api.ozzyl.com';
        }
        return $url;
    }

    public static function render_settings_page(): void
    {
        if (!current_user_can('manage_woocommerce')) {
            return;
        }
        ?>
        <div class="wrap">
            <h1>Ozzyl Guard</h1>
            <p>Assess COD orders asynchronously. Network or provider failure never automatically approves or blocks an order.</p>
            <?php settings_errors('ozzyl_guard'); ?>
            <form method="post" action="options.php">
                <?php settings_fields('ozzyl_guard'); ?>
                <table class="form-table" role="presentation">
                    <tr><th><label for="og_enabled">Enable integration</label></th><td><select id="og_enabled" name="<?php echo esc_attr(self::ENABLED); ?>"><option value="yes" <?php selected(get_option(self::ENABLED), 'yes'); ?>>Yes</option><option value="no" <?php selected(get_option(self::ENABLED, 'no'), 'no'); ?>>No</option></select></td></tr>
                    <tr><th><label for="og_cod_only">Assess COD only</label></th><td><select id="og_cod_only" name="<?php echo esc_attr(self::COD_ONLY); ?>"><option value="yes" <?php selected(get_option(self::COD_ONLY, 'yes'), 'yes'); ?>>Yes</option><option value="no" <?php selected(get_option(self::COD_ONLY), 'no'); ?>>No</option></select></td></tr>
                    <tr><th><label for="og_api_url">API URL</label></th><td><input class="regular-text" id="og_api_url" name="<?php echo esc_attr(self::API_URL); ?>" value="<?php echo esc_attr(get_option(self::API_URL, 'https://api.ozzyl.com')); ?>" /></td></tr>
                    <tr><th><label for="og_new_key">Service key</label></th><td><input class="regular-text" type="password" autocomplete="new-password" id="og_new_key" name="ozzyl_guard_new_key" value="" placeholder="Leave empty to retain the current key" /><p class="description">Encrypted at rest. Current prefix: <?php echo esc_html((string) get_option(self::KEY_PREFIX, 'Not configured')); ?></p></td></tr>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }

    public static function schedule_assessment(WC_Order $order): void
    {
        if (get_option(self::ENABLED, 'no') !== 'yes') {
            return;
        }
        if (get_option(self::COD_ONLY, 'yes') === 'yes' && $order->get_payment_method() !== 'cod') {
            return;
        }
        self::enqueue(self::ASSESS_HOOK, [$order->get_id()]);
    }

    public static function assess_order(int $orderId): void
    {
        $order = wc_get_order($orderId);
        if (!$order instanceof WC_Order) {
            return;
        }
        $phone = $order->get_billing_phone();
        if ($phone === '') {
            self::record_failure($order, 'INVALID_PHONE', 'The order has no billing phone.');
            return;
        }
        $payload = [
            'external_order_id' => (string) $order->get_order_number(),
            'phone' => $phone,
            'order_total' => (float) $order->get_total(),
            'payment_method' => $order->get_payment_method() === 'cod' ? 'cod' : 'prepaid',
            'shipping_address' => [
                'district' => $order->get_shipping_state() ?: $order->get_billing_state(),
                'area' => $order->get_shipping_city() ?: $order->get_billing_city(),
                'raw' => trim($order->get_shipping_address_1() . ' ' . $order->get_shipping_address_2()),
            ],
            'items_count' => $order->get_item_count(),
        ];
        $result = self::api_request('/v1/risk-assessments', $payload, sprintf('woocommerce:%d:risk-v1', $orderId));
        if (!$result['success']) {
            self::record_failure($order, $result['code'], $result['message']);
            return;
        }
        $assessment = $result['data'];
        if (!self::is_assessment($assessment)) {
            self::record_failure($order, 'INVALID_RESPONSE', 'The assessment response does not match the canonical contract.');
            return;
        }
        $order->update_meta_data('_ozzyl_guard_assessment_id', $assessment['assessment_id']);
        $order->update_meta_data('_ozzyl_guard_score', (int) $assessment['risk_score']);
        $order->update_meta_data('_ozzyl_guard_level', $assessment['risk_level']);
        $order->update_meta_data('_ozzyl_guard_decision', $assessment['decision']);
        $order->update_meta_data('_ozzyl_guard_confidence', (float) $assessment['confidence']);
        $order->update_meta_data('_ozzyl_guard_signals', wp_json_encode($assessment['signals']));
        $order->update_meta_data('_ozzyl_guard_degraded', !empty($assessment['meta']['degraded']) ? 'yes' : 'no');
        $order->delete_meta_data('_ozzyl_guard_error');
        if (in_array($assessment['decision'], ['hold', 'block'], true) && !$order->has_status(['completed', 'cancelled', 'refunded'])) {
            $order->update_status('on-hold', sprintf('Ozzyl Guard decision: %s (score %d).', $assessment['decision'], $assessment['risk_score']));
        } elseif (in_array($assessment['decision'], ['verify', 'review'], true)) {
            $order->add_order_note(sprintf('Ozzyl Guard recommends %s before fulfilment (score %d).', $assessment['decision'], $assessment['risk_score']));
        }
        $order->save();
    }

    public static function schedule_outcome(int $orderId, string $from, string $to, WC_Order $order): void
    {
        $mapping = ['completed' => 'delivered', 'refunded' => 'returned', 'cancelled' => 'cancelled_before_shipping'];
        if (isset($mapping[$to])) {
            self::enqueue(self::OUTCOME_HOOK, [$orderId, $mapping[$to], gmdate('c')]);
        }
    }

    public static function submit_outcome(int $orderId, string $outcome, string $occurredAt): void
    {
        $order = wc_get_order($orderId);
        if (!$order instanceof WC_Order) {
            return;
        }
        $payload = [
            'external_order_id' => (string) $order->get_order_number(),
            'outcome' => $outcome,
            'occurred_at' => $occurredAt,
        ];
        $assessmentId = (string) $order->get_meta('_ozzyl_guard_assessment_id');
        if ($assessmentId !== '') {
            $payload['assessment_id'] = $assessmentId;
        }
        $result = self::api_request('/v1/order-outcomes', $payload, sprintf('woocommerce:%d:outcome:%s:%s', $orderId, $outcome, $occurredAt));
        if (!$result['success']) {
            $order->add_order_note('Ozzyl Guard outcome feedback can be retried: ' . $result['code']);
            $order->save();
        }
    }

    public static function render_order_panel(WC_Order $order): void
    {
        $assessmentId = (string) $order->get_meta('_ozzyl_guard_assessment_id');
        $error = (string) $order->get_meta('_ozzyl_guard_error');
        echo '<div class="order_data_column" style="width:100%;clear:both;padding-top:16px"><h3>Ozzyl Guard</h3>';
        if ($assessmentId !== '') {
            printf(
                '<p><strong>Score:</strong> %d &nbsp; <strong>Level:</strong> %s &nbsp; <strong>Decision:</strong> %s &nbsp; <strong>Confidence:</strong> %s</p>',
                (int) $order->get_meta('_ozzyl_guard_score'),
                esc_html((string) $order->get_meta('_ozzyl_guard_level')),
                esc_html((string) $order->get_meta('_ozzyl_guard_decision')),
                esc_html(number_format_i18n((float) $order->get_meta('_ozzyl_guard_confidence') * 100, 0) . '%')
            );
            echo '<p><code>' . esc_html($assessmentId) . '</code></p>';
        } elseif ($error !== '') {
            echo '<p style="color:#a62b2b"><strong>Assessment unavailable:</strong> ' . esc_html($error) . '</p><p>No automatic allow or block action was applied.</p>';
        } else {
            echo '<p>The assessment is queued or has not run.</p>';
        }
        $url = wp_nonce_url(admin_url('admin-post.php?action=ozzyl_guard_recheck&order_id=' . $order->get_id()), 'ozzyl_guard_recheck_' . $order->get_id());
        echo '<p><a class="button" href="' . esc_url($url) . '">Recheck risk</a></p></div>';
    }

    public static function manual_recheck(): void
    {
        $orderId = isset($_GET['order_id']) ? absint($_GET['order_id']) : 0;
        if (!$orderId || !current_user_can('edit_shop_order', $orderId)) {
            wp_die('Not allowed.');
        }
        check_admin_referer('ozzyl_guard_recheck_' . $orderId);
        self::enqueue(self::ASSESS_HOOK, [$orderId]);
        wp_safe_redirect(wp_get_referer() ?: admin_url('post.php?post=' . $orderId . '&action=edit'));
        exit;
    }

    private static function api_request(string $path, array $payload, string $idempotencyKey): array
    {
        $stored = (string) get_option(self::KEY_PAYLOAD, '');
        if ($stored === '') {
            return ['success' => false, 'code' => 'SERVICE_KEY_MISSING', 'message' => 'The service key is not configured.'];
        }
        try {
            $serviceKey = self::decrypt_value($stored);
        } catch (Throwable $error) {
            return ['success' => false, 'code' => 'SERVICE_KEY_UNAVAILABLE', 'message' => 'The stored service key cannot be opened.'];
        }
        $url = untrailingslashit((string) get_option(self::API_URL, 'https://api.ozzyl.com')) . $path;
        $response = wp_remote_post($url, [
            'timeout' => 5,
            'redirection' => 0,
            'headers' => [
                'Authorization' => implode('', ['Bea', 'rer', chr(32), $serviceKey]),
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
                'Idempotency-Key' => $idempotencyKey,
            ],
            'body' => wp_json_encode($payload),
            'data_format' => 'body',
        ]);
        if (is_wp_error($response)) {
            return ['success' => false, 'code' => 'NETWORK_ERROR', 'message' => 'The Ozzyl Guard request failed.'];
        }
        $status = (int) wp_remote_retrieve_response_code($response);
        $data = json_decode((string) wp_remote_retrieve_body($response), true);
        if ($status < 200 || $status >= 300 || !is_array($data)) {
            $code = is_array($data) && isset($data['error']['code']) ? sanitize_key($data['error']['code']) : 'API_ERROR';
            $message = is_array($data) && isset($data['error']['message']) ? sanitize_text_field($data['error']['message']) : 'The API returned an error.';
            return ['success' => false, 'code' => $code, 'message' => $message];
        }
        return ['success' => true, 'data' => $data];
    }

    private static function is_assessment(array $value): bool
    {
        return ($value['success'] ?? false) === true
            && is_string($value['assessment_id'] ?? null)
            && is_numeric($value['risk_score'] ?? null)
            && in_array($value['risk_level'] ?? null, ['low', 'moderate', 'high', 'critical', 'unknown'], true)
            && in_array($value['decision'] ?? null, ['allow', 'verify', 'review', 'hold', 'block'], true)
            && is_numeric($value['confidence'] ?? null)
            && is_array($value['signals'] ?? null);
    }

    private static function record_failure(WC_Order $order, string $code, string $message): void
    {
        $order->update_meta_data('_ozzyl_guard_error', $code . ': ' . $message);
        $order->update_meta_data('_ozzyl_guard_degraded', 'yes');
        $order->add_order_note('Ozzyl Guard assessment unavailable (' . $code . '). No automatic allow or block action was applied.');
        $order->save();
    }

    private static function enqueue(string $hook, array $args): void
    {
        if (function_exists('as_enqueue_async_action')) {
            as_enqueue_async_action($hook, $args, 'ozzyl-guard', true);
            return;
        }
        wp_schedule_single_event(time() + 2, $hook, $args);
    }

    private static function encrypt_value(string $plaintext): string
    {
        if (!function_exists('sodium_crypto_secretbox')) {
            throw new RuntimeException('The sodium extension is required.');
        }
        $key = hash('sha256', wp_salt('auth') . wp_salt('secure_auth'), true);
        $nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        return base64_encode($nonce . sodium_crypto_secretbox($plaintext, $nonce, $key));
    }

    private static function decrypt_value(string $payload): string
    {
        $decoded = base64_decode($payload, true);
        if ($decoded === false || strlen($decoded) <= SODIUM_CRYPTO_SECRETBOX_NONCEBYTES) {
            throw new RuntimeException('Invalid encrypted value.');
        }
        $key = hash('sha256', wp_salt('auth') . wp_salt('secure_auth'), true);
        $nonce = substr($decoded, 0, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $ciphertext = substr($decoded, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $plaintext = sodium_crypto_secretbox_open($ciphertext, $nonce, $key);
        if ($plaintext === false) {
            throw new RuntimeException('Encrypted value could not be opened.');
        }
        return $plaintext;
    }
}

add_action('plugins_loaded', static function (): void {
    if (class_exists('WooCommerce')) {
        Ozzyl_Guard_WooCommerce::boot();
    }
});
