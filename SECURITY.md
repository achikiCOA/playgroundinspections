# Security and Privacy Notes

## Data Collected

The app can store:

- Playground names, locations, age groups, and surface types
- Inspection date, time, weather/condition notes, checklist responses, priorities, and repair notes
- Optional inspector name entered by staff
- Optional issue photos selected by staff
- Repair/work-order status

The app does not request GPS location, device location permissions, account credentials, API keys, bearer tokens, tenant IDs, or payment information.

## Where Data Is Stored

This is a static GitHub Pages app. Inspection data is stored in the browser's `localStorage` on the device that entered it.

Data is not automatically uploaded to GitHub, a server, or a shared database. Staff can manually export JSON or CSV files. JSON and CSV exports omit inspector names and embedded photo data unless the export privacy checkbox is selected.

## Risk Notes

- Anyone with access to the same browser profile and device may be able to view locally saved inspection records.
- Photos may accidentally include children, staff, license plates, addresses, or other identifying details. Staff should attach only photos needed to document a repair issue.
- Browser storage is limited and can be cleared by the user, device policy, private browsing, browser cleanup, or operating system storage pressure.
- Exported files should be treated as records and stored according to the organization's retention and privacy procedures.
- Email/share features use the device's browser and installed apps. Some browsers cannot attach files directly; in that case, the PDF is downloaded and must be attached manually.

## Current Hardening

- No secrets, API keys, tenant IDs, or bearer tokens are stored in frontend code.
- User-entered text in the main list screens is rendered with DOM APIs and `textContent`.
- Remaining generated report HTML escapes user-provided text before printing.
- Reference URLs are validated against an allowlist before use.
- Photo uploads require an image MIME type, have an original file size limit, and are compressed before storage.
- Local storage size is checked before writes, with warnings before the app approaches browser storage limits.
- Export privacy controls default to excluding inspector names and photo data.

## Future Authentication Recommendations

When shared cross-device records are required, add authentication and a backend instead of expanding local-only storage.

Recommended approach:

- Use a managed identity provider such as Microsoft Entra ID, Google Workspace, Auth0, Firebase Auth, or Supabase Auth.
- Keep all API keys, service-role keys, tenant secrets, and bearer tokens off the frontend.
- Use short-lived user sessions and backend-enforced authorization rules.
- Store inspections in a database with per-organization access controls.
- Store photos in private object storage with signed URLs or authenticated download routes.
- Add audit fields such as created by, updated by, created at, updated at, and repair status changed by.
- Add server-side validation for file type, file size, text length, and required inspection fields.
- Add an administrator export/audit workflow for records retention.
