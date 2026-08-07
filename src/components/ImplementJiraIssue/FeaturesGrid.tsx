import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description:
      "Optimized for speed and performance. Get results in seconds, not minutes.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description:
      "Enterprise-grade security with end-to-end encryption and role-based access.",
  },
  {
    icon: "🤖",
    title: "AI-Powered",
    description:
      "Intelligent automation that learns from your workflow and adapts over time.",
  },
  {
    icon: "🔗",
    title: "Deep Integrations",
    description:
      "Connect with Jira, GitHub, Linear, Slack, and 50+ tools you already use.",
  },
  {
    icon: "📊",
    title: "Rich Analytics",
    description:
      "Real-time dashboards and detailed reports to track every metric that matters.",
  },
  {
    icon: "⚡",
    title: "Developer-First",
    description:
      "Built by developers, for developers. Clean APIs, great docs, fast iteration.",
  },
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="px-6 py-16"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="features-heading"
          className="mb-3 text-center text-3xl font-bold tracking-tight text-foreground"
        >
          Everything You Need
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          All the tools to build, ship, and scale — in one platform.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="mb-4 block text-3xl" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
