# Operations Guide

## Staff Rollout

Recommended rollout checklist:

1. Confirm the live GitHub Pages URL opens on staff phones.
2. Have staff continue past the Get Started page.
3. Confirm all standard playground cards are present.
4. Run a test inspection with Mark All Pass.
5. Run a test inspection with one issue and one photo.
6. Save the inspection and test Print / Download PDF.
7. Test Email / Share PDF on the devices staff actually use.
8. Export JSON as a backup test.
9. Import the JSON on a second device as a restore test.

## Record Backup

Because records are stored in browser local storage, establish a manual backup routine.

Suggested routine:

- Export JSON weekly or monthly.
- Store exports in an approved shared location.
- Use the private export checkbox only when inspector names/photos are required for the backup.
- Keep exported files according to the organization's records-retention policy.

## Troubleshooting

### Saved records do not show on another device

Expected behavior. This app does not sync data across devices. Use JSON export/import.

### Staff cannot email a PDF attachment directly

Some browsers do not support file sharing through the Web Share API. In that case, the app downloads the PDF and opens an email draft. Staff must attach the downloaded PDF manually.

### Photos fail to save

The file may be too large or not an image. Use a smaller image under 5 MB.

### Storage limit warning appears

Export records, remove unnecessary photos, or clear old local records after backing them up.

### GitHub Pages still shows an old version

Wait a few minutes for Pages deployment. Then hard refresh the browser. Mobile browsers may cache aggressively.

## Manual QA Checklist

Before each release:

- Run `npm run check`.
- Open the app in a browser.
- Verify the instructions screen.
- Verify playground selection and Back navigation.
- Add and edit a playground card.
- Save a clean inspection.
- Save an inspection with an issue and photo.
- Test post-inspection print/download.
- Test Email / Share PDF.
- Test History, Repairs, JSON export, CSV export, and JSON import.
- Verify default exports omit inspector names and photo data.
- Verify private exports include inspector names and photo data only when selected.
