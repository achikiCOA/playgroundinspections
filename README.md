# Playground Inspection Log

A phone-first static web app for documenting playground inspections, saving inspection history by playground, and tracking repair/work-order status.

The app opens with standard playground cards for East State Street, Highland Park, Richland Avenue Park, and West State Street Park play areas.

Each playground history screen includes a printable playground summary with inspection counts, open repairs, recent inspections, issue detail, completed repairs, and review signature lines. Saving an inspection also opens a post-inspection summary that can be printed or saved as a PDF.

On mobile, staff start from a playground selection page. Selecting a card opens the inspection workspace for that playground, and the Back button returns to the playground list.

## Live App

After GitHub Pages is enabled, the app will be available at:

`https://achikicoa.github.io/playgroundinspections/`

## Data Storage

Inspection records are stored in the browser's local storage on the device that completes the inspection. Use the built-in JSON export for backup or record transfer. JSON exports include saved repair items and attached issue photos. CSV exports are available for spreadsheet review, but they only note whether a photo was attached.

## Inspection References

- NRPA Daily Dozen Playground Safety Checklist
- Ohio Administrative Code 5180:2-12-11
- CPSI-style frequent inspection prompts

## GitHub Pages Setup

1. Open this repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
