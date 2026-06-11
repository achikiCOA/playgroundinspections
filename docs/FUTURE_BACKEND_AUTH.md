# Future Backend and Authentication Plan

Authentication has intentionally not been added yet. This document describes a recommended migration path when shared records, staff accounts, or centralized reporting become necessary.

## Goals

- Keep secrets out of frontend code.
- Give each staff member an account.
- Store inspections and repairs centrally.
- Store photos outside browser local storage.
- Support audit trails and supervisor review.

## Recommended Architecture

```text
Browser app
  -> Auth provider
  -> Backend API
  -> Database
  -> Private object storage for photos
```

## Candidate Platforms

Any of these can work:

- Microsoft Entra ID plus an API and database
- Firebase Auth, Firestore, and Cloud Storage
- Supabase Auth, Postgres, and Storage
- Auth0 plus a custom API and database

Choose based on the organization's existing IT stack.

## Frontend Rules

- Do not put service-role keys, tenant secrets, database passwords, or bearer tokens in source code.
- Public client IDs may be acceptable when required by an auth provider, but secrets must stay server-side.
- Treat the browser as untrusted.
- Validate server responses before rendering.

## Backend Rules

- Enforce authorization on every read and write.
- Validate inspection fields server-side.
- Validate image file MIME type and size server-side.
- Strip or reject unsafe file names.
- Store photos in private object storage.
- Use signed URLs or authenticated download endpoints for photos.
- Add audit fields for create/update/delete actions.

## Suggested Database Tables

- `organizations`
- `users`
- `playgrounds`
- `inspections`
- `inspection_items`
- `work_orders`
- `photo_attachments`
- `audit_events`

## Migration Strategy

1. Keep current JSON export stable.
2. Build an import tool that reads existing JSON exports.
3. Map playground IDs to backend playground records.
4. Import inspections and work orders.
5. Upload photo data URLs to private object storage.
6. Store resulting photo object references in `photo_attachments`.
7. Keep local-only mode available until staff confirm the backend workflow.
