

## Coordinator mode extension

Add a distinct coordinator demo role without weakening student ownership. The login screen will offer separate demo entry points for Alex Sharma (student) and Priya Nair (coordinator). Persist `currentRole` in the existing localStorage state, guard routes by role, and render a coordinator-specific navigation shell. The coordinator dashboard will use a synthetic cohort dataset with aggregated counts and no private notes: cohort size, readiness average, application-stage distribution, interview activity, document gaps, deadline risk, and a support queue. Keep the dashboard useful for interventions while explicitly labeling it as synthetic demo data and preserving the “visibility without surveillance” principle.

The coordinator view will be a static front-end role simulation suitable for the competition demo. It will later be replaceable with real authentication, a shared database, server-side authorization, and event-driven reminders without changing the information architecture. All records remain local to the browser in this demo.
