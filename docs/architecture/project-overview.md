# Project Overview

## Problem

Bangladesh e-commerce merchants lose money from fake COD orders, customer refusal, repeated delivery returns, unreachable customers, and ad spend directed toward known bad actors.

## Product

Ozzyl Guard evaluates each COD order using courier history, merchant history, velocity, verification, and network reputation. It returns an explainable decision:

- `allow`
- `verify`
- `review`
- `hold`
- `block`

## Primary users

- Facebook commerce sellers
- WooCommerce stores
- Shopify stores
- Custom e-commerce applications
- OMS and multi-store SaaS platforms
- Fulfilment and courier operations teams

## Design principles

- Merchant-authorized first-party courier data is the preferred source.
- Unknown customers are not automatically safe or fraudulent.
- Decisions must be explainable.
- Provider failures must not silently block legitimate orders.
- Verified courier outcomes are more valuable than merchant opinions.
- Shared reputation requires evidence, confidence, decay, and dispute handling.

## Non-goals for the first MVP

- Full e-commerce order management
- Fully autonomous ML decisions
- Global customer blacklisting without evidence
- Dependence on one unofficial third-party fraud API
- Browser scraping inside synchronous checkout requests

## Success metrics

- Return-to-origin reduction
- Courier cost saved
- False-positive rate
- OTP completion rate
- Verification conversion rate
- Percentage of assessments backed by fresh courier data
- API p95 latency
- Merchant retention and paid conversion
