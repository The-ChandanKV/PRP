import React, { useState } from "react";
import { HeroSection } from "../components/ImplementJiraIssue/HeroSection";
import { FeaturesGrid } from "../components/ImplementJiraIssue/FeaturesGrid";

/** Generated page for: Implement Jira issue SCRUM-41 for The-ChandanKV/PRP. Summary: UI/UX: Add a Dashb
 * Template: dashboard_overview
 */

type PageState = "loaded" | "saving" | "saved" | "error";

export default function ImplementJiraIssuePage() {
  const [state, setState] = useState<PageState>("loaded");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function handleGetStarted() {
    setState("saving");
    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        setState("saved");
        setTimeout(() => setState("loaded"), 3000);
      } else {
        setErrorMsg("Something went wrong. Please try again.");
        setState("error");
      }
    }, 800);
  }

  function handleRetry() {
    setErrorMsg(null);
    setState("loaded");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between"
          aria-label="Main navigation"
        >
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-xl font-bold text-transparent">
            ImplementJiraIssue
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <button
              type="button"
              onClick={handleGetStarted}
              disabled={state === "saving"}
              aria-disabled={state === "saving"}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "saving" ? "Loading…" : "Get Started"}
            </button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Success banner */}
        {state === "saved" && (
          <div
            role="status"
            aria-live="polite"
            className="animate-pulse border-b border-green-500/20 bg-green-500/10 px-6 py-3 text-center text-sm font-medium text-green-400"
          >
            ✓ You&apos;re signed up! Check your inbox for next steps.
          </div>
        )}

        {/* Error banner */}
        {state === "error" && errorMsg && (
          <div
            role="alert"
            aria-live="assertive"
            className="border-b border-destructive/20 bg-destructive/10 px-6 py-3 text-center"
          >
            <span className="text-sm text-destructive">{errorMsg}</span>
            <button
              type="button"
              onClick={handleRetry}
              className="ml-3 rounded px-3 py-1 text-sm font-semibold text-destructive underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-destructive"
            >
              Retry
            </button>
          </div>
        )}

        <HeroSection
          title="Implement Jira issue SCRUM-41 for The-ChandanKV/PRP. Summary: UI/UX: Add a Dashb"
          subtitle="grid-top-stats-then-table"
          onGetStarted={handleGetStarted}
        />
        <FeaturesGrid />
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2026 ImplementJiraIssue. Built with PRPilot.</p>
      </footer>
    </div>
  );
}
