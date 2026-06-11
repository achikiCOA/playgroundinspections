# Data Model

## Local Storage Key

```text
playgroundInspectionLog.v1
```

## State Shape

```json
{
  "playgrounds": [],
  "inspections": [],
  "workOrders": []
}
```

## Playground

```json
{
  "id": "standard-east-state-grade-school",
  "name": "East State Street Grade School Playground",
  "age": "5-12 years",
  "location": "East State Street",
  "surface": "Engineered wood fiber",
  "createdAt": "2026-06-11T00:00:00.000Z"
}
```

Standard playground IDs are stable and should not be changed casually. Saved inspections and work orders reference playground IDs.

## Inspection

```json
{
  "id": "uuid-or-fallback-id",
  "playgroundId": "standard-east-state-grade-school",
  "playgroundName": "East State Street Grade School Playground",
  "date": "2026-06-11",
  "time": "09:30",
  "inspector": "Inspector Name",
  "weather": "Dry",
  "overallNotes": "",
  "items": [],
  "createdAt": "2026-06-11T00:00:00.000Z"
}
```

## Checklist Item

```json
{
  "id": "surface-depth",
  "group": "Surfacing and Fall Zones",
  "title": "Protective surfacing is adequate for equipment height and type.",
  "hint": "Check loose-fill depth...",
  "status": "Pass",
  "priority": "3",
  "repairStatus": "Open",
  "notes": "",
  "photo": ""
}
```

`photo` is a compressed image data URL. It is omitted from default JSON export unless the export privacy checkbox is selected.

## Work Order

```json
{
  "id": "uuid-or-fallback-id",
  "inspectionId": "inspection-id",
  "playgroundId": "standard-east-state-grade-school",
  "playgroundName": "East State Street Grade School Playground",
  "itemId": "surface-depth",
  "itemTitle": "Protective surfacing is adequate for equipment height and type.",
  "priority": "1",
  "status": "Open",
  "notes": "Loose fill low at slide exit.",
  "photo": "",
  "createdAt": "2026-06-11T00:00:00.000Z",
  "inspectionDate": "2026-06-11",
  "updatedAt": "2026-06-11T00:00:00.000Z"
}
```

## Migration and Normalization

On load, the app:

- Normalizes missing arrays.
- Adds missing standard playground cards without deleting existing local records.
- Adds fallback IDs where missing.
- Defaults missing work-order status to `Open`.

This allows older JSON exports or older local storage records to keep working.

## Export Privacy Behavior

Default export:

- Includes playground data.
- Includes inspections and work orders.
- Omits inspector names.
- Omits embedded photo data.

Private export checkbox enabled:

- Includes inspector names.
- Includes embedded photo data in JSON.
- CSV only notes whether a photo exists; it does not embed image data.
