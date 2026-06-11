# Setup and Handoff Guide

## Project Shape

This app is intentionally static:

- `index.html` contains the HTML, CSS, and JavaScript.
- There is no build step.
- There are no runtime dependencies.
- GitHub Pages can serve the app directly from the repository root.

## Requirements

- A modern browser for running the app
- Git for version control
- Node.js only for the optional syntax check

## Local Use

Open `index.html` directly in a browser, or serve the folder with any static file server.

Because the app stores data in browser `localStorage`, test data is tied to the browser/profile and origin used during testing.

## Validation

Run:

```bash
npm run check
```

This parses the inline JavaScript in `index.html`. It does not run full browser interaction tests.

Manual smoke test:

1. Open the app.
2. Continue past the instructions screen.
3. Select a playground.
4. Tap Mark All Pass.
5. Enter inspector name.
6. Save inspection.
7. Confirm the post-inspection summary opens.
8. Test Print / Download PDF.
9. Test Export JSON and Export CSV.
10. Confirm Repairs and History still render.

## Publishing

The app is published through GitHub Pages.

Recommended repository settings:

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

The `main` and `gh-pages` branches are kept in sync by manually moving `gh-pages` to `main` before pushing.

## Release Process

1. Make changes locally.
2. Run `npm run check`.
3. Manually smoke test in a browser.
4. Commit to `main`.
5. Update `gh-pages` to match `main`.
6. Push both branches.
7. Wait for GitHub Pages to redeploy.
8. Test the live URL.

## Known Constraints

- Data does not sync across devices.
- Data may be cleared if browser storage is cleared.
- Direct email attachment support depends on the browser/device share API.
- The app has no authentication yet.
