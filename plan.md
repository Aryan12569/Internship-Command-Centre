# Internship Command Center polish plan

## Direction

Refine the existing student career operating system into a calmer, more editorial SaaS workspace: tighter hierarchy, stronger accessible controls, and a dark mode that feels intentional rather than inverted.

- **Design movement:** editorial productivity SaaS with a midnight command-center layer.
- **Core principles:** high signal density, calm contrast, clear action priority, persistent user control.
- **Color philosophy:** cobalt remains the action color; cool gray surfaces support focus in light mode while deep navy/charcoal surfaces reduce glare in dark mode.
- **Layout paradigm:** fixed command rail plus fluid content canvas, with cards as modular work surfaces.
- **Signature elements:** cobalt orbit mark, readiness rings, compact status pills.
- **Interaction philosophy:** every state change is visible, reversible, and persisted locally; theme choice is one click and remembered.
- **Animation:** short 160–220ms transitions, subtle lift on actionable cards, respect reduced-motion preferences.
- **Typography:** DM Sans for UI copy and Space Grotesk for headings and metrics.
- **Brand essence:** a student-controlled mission control for moving from internship intent to offer; focused, intelligent, reassuring.
- **Brand voice:** “Keep the momentum going.” and “One calm workspace for your next move.”
- **Wordmark/mark:** orbit-style cobalt mark with a compact wordmark.
- **Signature color:** electric cobalt `#2f6bff`.

## Implementation

1. Add a persistent light/dark theme preference stored separately from demo records, applied before and after render, with accessible controls on login and in the authenticated top bar.
2. Extend design tokens and component overrides for dark surfaces, borders, inputs, status colors, charts, modals, and mobile navigation while preserving the current responsive layout.
3. Improve polish with stronger focus-visible states, smoother card/button transitions, theme-aware topbar/sidebar treatment, and an updated theme control label/icon.
4. Preserve all existing routes and localStorage workflows, then run syntax, route, preview, and browser checks for login, dashboard, theme switching, and persistence.

## Project structure

- `index.html`: document shell and external font/icon/chart dependencies.
- `css/style.css`: light/dark token system, responsive layout, components, and polish overrides.
- `js/data.js`: synthetic demo seed data.
- `js/app.js`: state, routing, views, theme preference, and interactions.
- `manus-routes.json`: route declarations for preview tooling.
- `README.md`: local run and product behavior documentation.
