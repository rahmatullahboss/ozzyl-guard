from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    file = Path(path)
    text = file.read_text()
    if text.count(old) != 1:
        raise SystemExit(f"Expected one fixture match in {path}; found {text.count(old)}")
    file.write_text(text.replace(old, new, 1))


replace_once(
    "apps/api/src/postgres-administration.test.ts",
    "`insert into users (id, email, status) values ($1, $2, 'active'), ($3, $4, 'active')`,\n        [ownerA, `${ownerA}@example.com`, ownerB, `${ownerB}@example.com`],",
    "`insert into users (id, email, managed_auth_id, status)\n         values ($1, $2, $3, 'active'), ($4, $5, $6, 'active')`,\n        [\n          ownerA,\n          `${ownerA}@example.com`,\n          `managed-${ownerA}`,\n          ownerB,\n          `${ownerB}@example.com`,\n          `managed-${ownerB}`,\n        ],",
)
replace_once(
    "apps/api/src/postgres-dashboard-isolation.test.ts",
    """          insert into users (id, email, platform_role, status) values
            ($1, $2, 'merchant', 'active'),
            ($3, $4, 'merchant', 'active'),
            ($5, $6, 'platform_admin', 'active')
        `,
        [
          merchantA,
          `${merchantA}@example.com`,
          merchantB,
          `${merchantB}@example.com`,
          platformAdmin,
          `${platformAdmin}@example.com`,
        ],""",
    """          insert into users (id, email, managed_auth_id, platform_role, status) values
            ($1, $2, $3, 'merchant', 'active'),
            ($4, $5, $6, 'merchant', 'active'),
            ($7, $8, $9, 'platform_admin', 'active')
        `,
        [
          merchantA,
          `${merchantA}@example.com`,
          `managed-${merchantA}`,
          merchantB,
          `${merchantB}@example.com`,
          `managed-${merchantB}`,
          platformAdmin,
          `${platformAdmin}@example.com`,
          `managed-${platformAdmin}`,
        ],""",
)

print("runtime role isolation auth fixtures fixed")
