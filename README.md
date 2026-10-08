# Internship Command Center

A competition-ready static web app for the **Internship Lifecycle & Readiness Tracker** problem statement.

## Run locally

No build step is required. From this directory, start any static server:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000` and choose **Continue as Demo Student** or **Continue as Demo Coordinator**.

The same folder can be deployed directly to Netlify as a static site. No server, database, authentication service, or environment variables are required.

## Product behavior

- Responsive dashboard with Prepare → Discover → Apply → Interview → Offer journey.
- Synthetic opportunities with working search, location/mode/industry filters, sorting, saved roles and match indicators.
- Applying from an opportunity creates a persistent application and opens its detail page.
- Application stages, notes, deadlines, interview links and activity persist in `localStorage`.
- Stage changes to Interview automatically create a linked interview record.
- Readiness is derived from profile completion, document statuses, checklist completion, skills and interview preparation.
- Documents, profile, interviews, deadlines and applications use the same shared state.
- Mobile navigation switches to a compact bottom bar; tables become mobile cards.
- All companies, metrics, people and records are synthetic demo information and are labeled accordingly.
- Light and dark modes are available from the login screen and authenticated top bar; the preference persists independently in browser localStorage.
- The coordinator demo role has a separate login, protected navigation, cohort overview, journey distribution, readiness signals, support queue, common themes, and an explicit aggregated-only privacy model.

## Visual polish

The refined interface keeps the original cobalt mission-control identity while adding a low-glare dark palette, stronger focus states, theme-aware cards and forms, clearer button hierarchy, subtle motion, and reduced-motion support. Switch themes with the **Dark mode** or **Light mode** control in the top bar. The choice is remembered after refresh and navigation.

## Files

- `index.html` — semantic entry point and CDN dependencies.
- `css/style.css` — design system and responsive layout.
- `js/data.js` — synthetic seed data.
- `js/app.js` — centralized state, hash routes, views and interactions.
- `manus-routes.json` — static route declarations for preview tooling.

## Resetting the demo

Use **Settings → Reset demo data** to restore the original synthetic workspace, or clear the `icc-demo-state-v1` key from browser localStorage.

## Coordinator demo access

Choose **Continue as Demo Coordinator** on the login screen. The coordinator view uses synthetic program-level data for the BBA Business Analytics 2027 cohort. It shows aggregate counts and readiness themes only; it intentionally does not expose individual student notes, documents, or application details. Use **Cohort overview** for the summary and **Cohort analytics** for lifecycle distribution, readiness completion, support signals, and common intervention themes.
