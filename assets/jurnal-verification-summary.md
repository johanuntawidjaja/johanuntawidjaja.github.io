# Jurnal Lentera Bursa — verification scope

Record date: 16 September 2026
Published as a portfolio summary, not as raw test output or an independent audit.

## Recorded local result: 52 / 52 checks passed

### Access verification: 25 checks

Valid tokens; forged signatures; unsigned tokens; wrong audience or issuer;
expiry, issued-at and not-before constraints; altered payloads; missing
configuration; signing-key caching.

### Telemetry filtering: 27 checks

Missing authentication; forged body email; unknown events; rejection of journal
content; enum filtering; error scrubbing; length limits; malformed JSON; queue
limits; session-ID sanitisation; screen-class filtering; absent database handling.

## What changed

An early deployment included files outside the intended public interface.
The deployment was revised to publish only the dedicated public directory.
Functions, database schema, configuration, tests and documentation remain outside
that directory. Missing access configuration causes the gated layer to fail closed.

## What this does not establish

This scope concerns the access and telemetry layers, not every product function.
It is not a fresh test execution, security certification or evidence of broad adoption.
Journal records stay in the user's browser. Private logs, identities, credentials
and deployment metadata are deliberately excluded from this public summary.

Source: Johan's local technical-proof record, verified 16 September 2026.
