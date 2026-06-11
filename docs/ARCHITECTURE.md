# Architecture

## Overview

The Playground Inspection Log is a single-page static web app. It runs entirely in the browser and stores records in `localStorage`.

There is no server, build pipeline, package bundle, or database.

## Runtime Sections

`index.html` is organized into:

- Intro screen
- Post-inspection completion screen
- Header
- Playground selection screen
- Playground editor
- Inspection form/checklist
- Inspection history
- Repair/work-order status
- Inspection guidance
- Print-only summary container

## Main State

The app keeps a single in-memory `state` object:

```js
{
  playgrounds: [],
  inspections: [],
  workOrders: []
}
```

The state is persisted under:

```text
playgroundInspectionLog.v1
```

Intro preferences use:

```text
playgroundInspectionIntro.seen
playgroundInspectionIntro.always
```

## Important Flows

### Playground Selection

The app starts in `selection-mode`. Selecting a playground calls `openPlayground()`, which sets the selected playground, resets the inspection form, and switches to `inspection-mode`.

### Inspection Save

`saveInspection()` validates required fields, requires all checklist items to be completed, creates work orders for issue items, persists state, and opens the post-inspection summary.

If browser storage fails, the app rolls back the new inspection and work orders.

### Photos

Photos are optional. The app checks MIME type and file size, compresses images on a canvas, strips original metadata through canvas re-encoding, and stores the compressed data URL in local state.

### Exports

Exports default to privacy-preserving mode. Inspector names and photo data are omitted unless the user explicitly selects the export privacy checkbox.

### Print and PDF

The app uses browser print support for printable summaries. The Email / Share PDF action creates a simple client-side PDF for sharing where supported.

## Security Posture

See `SECURITY.md`.

## Future Backend Boundary

If a backend is added later, keep frontend responsibilities limited to:

- Collecting form input
- Rendering assigned records
- Calling authenticated backend APIs
- Handling local draft/offline states if needed

Backend responsibilities should include:

- Authentication
- Authorization
- Shared inspection storage
- Photo/object storage
- Audit logging
- Server-side validation
