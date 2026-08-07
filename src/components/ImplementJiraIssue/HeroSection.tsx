import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  onGetStarted: () => void;
}

export function HeroSection({
  title,
  subtitle,
  onGetStarted,
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden py-24 px-6 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 70%)",
        }}
      />
      <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
        ✨ Now Available
      </span>
      <h1
        id="hero-heading"
        className="mx-auto mb-6 max-w-3xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent"
      >
        {title}
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
        {subtitle ||
          "Build faster, ship smarter. A powerful platform designed for modern development teams."}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onGetStarted}
          className="rounded-lg bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary/90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Get Started Free
        </button>
        <a
          href="#features"
          className="rounded-lg border border-border bg-card px-7 py-3 text-base font-semibold text-foreground transition-all duration-200 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View Features
        </a>
      </div>
    </section>
  );
}
