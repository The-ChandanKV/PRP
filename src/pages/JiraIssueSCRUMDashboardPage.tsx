import React from "react";
import { PageHeader } from "../components/JiraIssueSCRUMDashboard/PageHeader";

/** Generated scaffold for: Implement Jira issue SCRUM-41 for The-ChandanKV/PRP. Summary: UI/UX: Add a Dashboard page with KPI stats, recent PR runs
 * Template: dashboard_overview
 * Planned components: 4
 */
export default function JiraIssueSCRUMDashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          JiraIssueSCRUMDashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          grid-top-stats-then-table
        </p>
      </header>
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <section className="rounded-lg border border-border bg-card p-6 text-card-foreground">
          <p className="text-sm text-muted-foreground">
            Loading, empty, and error states should be handled by data hooks.
          </p>
        </section>
        <PageHeader title="PageHeader" />
      </main>
    </div>
  );
}
