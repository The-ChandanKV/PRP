import React from "react";

/** Experimental Stitch HTML wrapper for: Implement Jira issue SCRUM-35 for The-ChandanKV/PRP. Summary: [UI] Build Modern  */
export default function StitchHtmlPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <h1 className="text-xl font-semibold mb-4">
        Implement Jira issue SCRUM-35 for The-ChandanKV/PRP. Summary: [UI] Build
        Modern{" "}
      </h1>
      {/* Raw HTML from stitch_experimental — replace with real components */}
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PRPilot - AI-powered GitHub PR Automation</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
    <script src='https://unpkg.com/lucide@latest'></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: var(--color-bg);
        }
    </style>
</head>
<body class="bg-slate-950 text-white">
    <header class="sticky top-0 bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <h1 class="text-xl font-bold">PRPilot</h1>
                <span class="bg-indigo-500 text-white px-2 py-1 rounded">v2.4</span>
            </div>
            <nav class="flex space-x-4">
                <a href="#features" class="hover:underline">Features</a>
                <a href="#pricing" class="hover:underline">Pricing</a>
                <a href="#faq" class="hover:underline">FAQ</a>
            </nav>
            <div class="flex items-center space-x-4">
                <a href="#sign-in" class="text-indigo-300 hover:underline">Sign In</a>
                <button class="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-4 py-2 rounded shadow-[0_0_25px_rgba(99,102,241,0.5)]">Get Started Free</button>
            </div>
        </div>
    </header>
    <section class="hero flex flex-col lg:flex-row items-center p-8" style="background: radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.25), rgba(255,255,255,0));">
        <div class="lg:w-1/2 space-y-6">
            <span class="text-lg">✨ Powered by Gemini 3.1 & Advanced AI</span>
            <h2 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">Automate Your GitHub PR Workflows</h2>
            <p>Enhance your team's productivity with AI-driven solutions.</p>
            <div class="space-x-4">
                <button class="bg-indigo-500 text-white px-4 py-2 rounded shadow-[0_0_30px_rgba(99,102,241,0.4)]">Get Started</button>
                <button class="border border-white text-white px-4 py-2 rounded backdrop-blur-lg">Learn More</button>
            </div>
        </div>
        <div class="lg:w-1/2 mt-8 lg:mt-0">
            <div class="bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl p-4">
                <div class="flex justify-between">
                    <div class="flex space-x-1">
                        <span class="h-2 w-2 rounded-full bg-red-500"></span>
                        <span class="h-2 w-2 rounded-full bg-yellow-500"></span>
                        <span class="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <span>pull_request_review.py</span>
                </div>
                <div class="mt-4">
                    <pre class="text-green-400">
                        <code>+ def test_pr_security():
                        </code>
                    </pre>
                    <pre class="text-red-400">
                        <code>- legacy_code():
                        </code>
                    </pre>
                </div>
                <div class="absolute top-4 right-4 bg-white text-slate-900 px-2 py-1 rounded-lg">✓ 0 Security Vulnerabilities Found</div>
            </div>
        </div>
    </section>
    <section class="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <!-- Replace this comment with the 6 feature cards implementation -->
    </section>
    <section class="pricing p-8">
        <!-- Replace this comment with the pricing toggle and tier card implementation -->
    </section>
    <section class="faq p-8">
        <!-- Replace this comment with the FAQ accordion implementation -->
    </section>
    <footer class="p-6 text-center">
        <p>&copy; 2023 PRPilot. All rights reserved.</p>
    </footer>
</body>
</html>`,
        }}
      />
    </div>
  );
}
