// AUTO-GENERATED — faithful 1:1 translation of the Stitch HTML document.
// Do NOT hand-edit: regenerate from source to preserve visual fidelity.
import React from "react";

export default function DashboardOverviewPage() {
  return (
    <div className="bg-background text-on-surface font-body-base antialiased min-h-screen overflow-x-hidden selection:bg-primary-container/30 selection:text-primary">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .glass-card {
            background-color: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(51, 65, 85, 0.6);
            border-top-color: rgba(255, 255, 255, 0.1);
        }
        
        .tilt-card {
            transform-style: preserve-3d;
            transition: transform 0.1s ease-out;
        }

        .scroll-reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .nav-link-underline {
            position: relative;
        }
        
        .nav-link-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: theme('colors.primary');
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link-underline:hover::after,
        .nav-link-active::after {
            width: 100%;
        }

        .btn-glow {
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-glow:hover {
            transform: scale(0.95);
            box-shadow: 0 0 15px rgba(79, 70, 229, 0.4);
        }
        
        .btn-primary {
            background-color: theme('colors.primary-container');
            color: theme('colors.on-primary-container');
            border: 1px solid theme('colors.primary-container');
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.2);
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.4);
        }
    `,
        }}
      />
      {/* Background Shader */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none" />
      {/* SideNavBar */}
      <nav className="h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container/50 backdrop-blur-xl border-r border-outline-variant/20 flex flex-col p-unit-md gap-unit-sm hidden md:flex inner-glow-subtle">
        <div className="px-md py-lg mb-4">
          <h2 className="font-headline-md text-primary font-bold">PRPilot</h2>
          <p className="font-label-caps text-on-surface-variant text-label-caps mt-1">
            AI Automation Health
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {/* Connect Repository */}
          <a
            className="flex items-center gap-3 px-md py-3 rounded-xl transition-all hover:bg-surface-bright/30 scale-98-active text-on-surface-variant font-label-caps text-label-caps"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              add_link
            </span>
            <span>Connect Repository</span>
          </a>
          {/* New Automation */}
          <a
            className="flex items-center gap-3 px-md py-3 rounded-xl transition-all hover:bg-surface-bright/30 scale-98-active text-on-surface-variant font-label-caps text-label-caps"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              auto_awesome
            </span>
            <span>New Automation</span>
          </a>
          {/* View Docs (Active state as requested by SideNavBar context, but user requested 'Dashboard', 'Repositories', etc. Resolving conflict: Use design system text, but JSON labels structure. We'll map to Dashboard context based on prompt) */}
          {/* Note: The prompt asked for Dashboard, Repositories, Workflows, Settings in the sidebar, but JSON specified different labels. I will use JSON labels for the SideNav as per strict instruction "Do not alter labels... Maintain original casing exactly as provided in the JSON." */}
          <a
            className="flex items-center gap-3 px-md py-3 rounded-xl transition-all scale-98-active bg-primary-container/10 text-primary border-r-4 border-primary font-label-caps text-label-caps"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              description
            </span>
            <span>View Docs</span>
          </a>
        </div>
        <div className="mt-auto px-md py-4 border-t border-outline-variant/10 flex items-center gap-3">
          <img
            alt="User Profile"
            className="w-8 h-8 rounded-full border border-outline-variant"
            data-alt="A futuristic minimalist avatar placeholder featuring a glowing neon blue silhouette against a dark obsidian background, conveying advanced AI technology."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJV5eEhqxliCd7q-Eiv9SdN8_1QdZFgKpXZJnu3ykfJDSgzaNyIN-UK6iHd5zxfMJWPs0DrmLDWzj-fH4tXM_SbBsXfhsko4IANzS3w1dt8fw88vUREWs_qFMgUK_lCt8YGBOkwKEoE1DAUMQFUY-ap4OUO1IFb51iDYBJ6sV-Dr02V61NK9d_9WdaX54VUZxktvddHKqMKZxe6e37F_l2MFmtywfhO2zGREInwcSkceRU_Md3fthSTsyir_RCx-T9t6Lu_pniK8"
          />
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Admin User
          </span>
        </div>
      </nav>
      {/* TopNavBar (Mobile mainly, or context depending on JSON) */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 shadow-sm md:hidden">
        <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
          <span className="text-headline-md font-headline-md font-bold text-primary">
            PRPilot
          </span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-200 active:opacity-80 text-on-surface-variant font-medium">
              notifications
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors duration-200 active:opacity-80 text-on-surface-variant font-medium">
              account_circle
            </span>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="relative z-10 md:ml-64 pt-20 md:pt-12 px-margin pb-2xl max-w-7xl mx-auto flex flex-col gap-[48px]">
        {/* Header Section */}
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 scroll-reveal">
          <div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-[#f8fafc]">
              Analytics Overview
            </h1>
            <p className="font-body-base text-body-base text-[#94a3b8] mt-2">
              Real-time performance metrics and agent activity.
            </p>
          </div>
          <button className="btn-primary btn-glow px-6 py-3 rounded-lg font-label-caps text-label-caps flex items-center gap-2">
            <span className="material-symbols-outlined">description</span>
            Generate Report
          </button>
        </section>
        {/* KPI Grid */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] scroll-reveal"
          id="kpi-grid"
        >
          {/* Card 1 */}
          <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-caps text-label-caps text-[#94a3b8]">
                PRs Processed
              </span>
              <span className="material-symbols-outlined text-secondary">
                merge_type
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-headline-md text-headline-md text-[#f8fafc]">
                1,248
              </span>
              <span className="font-body-sm text-body-sm text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                +12%
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-caps text-label-caps text-[#94a3b8]">
                Avg. Merge Time
              </span>
              <span className="material-symbols-outlined text-secondary">
                schedule
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-headline-md text-headline-md text-[#f8fafc]">
                18m 42s
              </span>
              <span className="font-body-sm text-body-sm text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                -5m
              </span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-caps text-label-caps text-[#94a3b8]">
                Quality Pass Rate
              </span>
              <span className="material-symbols-outlined text-secondary">
                verified
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-headline-md text-headline-md text-[#f8fafc]">
                99.8%
              </span>
              <span className="font-body-sm text-body-sm text-[#94a3b8] bg-surface-bright/50 px-2 py-0.5 rounded">
                Stable
              </span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-caps text-label-caps text-[#94a3b8]">
                Active Agents
              </span>
              <span className="material-symbols-outlined text-secondary">
                smart_toy
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-headline-md text-headline-md text-[#f8fafc]">
                24 / 30
              </span>
            </div>
            <div className="mt-4 w-full bg-surface-bright/50 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </section>
        {/* Main Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
          {/* Left Column: Recent Automation Runs */}
          <div className="glass-card rounded-xl flex flex-col overflow-hidden scroll-reveal">
            <div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/30">
              <h2 className="font-headline-md text-headline-md text-[#f8fafc]">
                Recent Automation Runs
              </h2>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
                more_horiz
              </button>
            </div>
            <div className="p-md flex-1 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/30 text-[#94a3b8] font-label-caps text-label-caps">
                    <th className="pb-3 font-normal px-2">Repository</th>
                    <th className="pb-3 font-normal px-2">Status</th>
                    <th className="pb-3 font-normal px-2">Time</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant/20">
                  <tr className="hover:bg-surface-bright/10 transition-colors group">
                    <td className="py-4 px-2 text-[#f8fafc] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#94a3b8]">
                        folder
                      </span>
                      frontend-core
                    </td>
                    <td className="py-4 px-2">
                      <span className="inline-flex items-center gap-1.5 bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded font-label-caps text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Success
                      </span>
                    </td>
                    <td className="py-4 px-2 text-[#94a3b8]">2m ago</td>
                  </tr>
                  <tr className="hover:bg-surface-bright/10 transition-colors group">
                    <td className="py-4 px-2 text-[#f8fafc] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#94a3b8]">
                        folder
                      </span>
                      auth-service
                    </td>
                    <td className="py-4 px-2">
                      <span className="inline-flex items-center gap-1.5 bg-blue-400/10 text-blue-400 px-2 py-1 rounded font-label-caps text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Running
                      </span>
                    </td>
                    <td className="py-4 px-2 text-[#94a3b8]">In progress</td>
                  </tr>
                  <tr className="hover:bg-surface-bright/10 transition-colors group">
                    <td className="py-4 px-2 text-[#f8fafc] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#94a3b8]">
                        folder
                      </span>
                      data-pipeline
                    </td>
                    <td className="py-4 px-2">
                      <span className="inline-flex items-center gap-1.5 bg-red-400/10 text-red-400 px-2 py-1 rounded font-label-caps text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        Failed
                      </span>
                    </td>
                    <td className="py-4 px-2 text-[#94a3b8]">15m ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right Column: Live Agent Analysis */}
          <div className="glass-card rounded-xl flex flex-col overflow-hidden scroll-reveal">
            <div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/30">
              <h2 className="font-headline-md text-headline-md text-[#f8fafc] flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
                </span>
                Live Agent Analysis
              </h2>
            </div>
            <div className="p-lg flex-1 flex flex-col gap-4">
              <div className="bg-surface-container-lowest/80 rounded-lg p-4 font-mono-code text-mono-code border border-outline-variant/20 overflow-y-auto max-h-[160px] custom-scrollbar text-sm">
                <div className="text-[#94a3b8] mb-2 opacity-50">
                  // Agent scanning PR #1042...
                </div>
                <div className="text-red-400 opacity-80 line-through">
                  - const timeout = 5000;
                </div>
                <div className="text-emerald-400 bg-emerald-400/10 px-1">
                  + const timeout = process.env.API_TIMEOUT || 10000;
                </div>
                <div className="text-[#94a3b8] mt-2 opacity-50">
                  // Validating configuration limits...
                </div>
                <div className="text-emerald-400 bg-emerald-400/10 px-1 mt-1">
                  + if (timeout &gt; MAX_LIMIT) throw new Error('Limit
                  exceeded');
                </div>
              </div>
              <div className="bg-primary-container/10 border border-primary/20 rounded-lg p-4 flex gap-3 items-start mt-auto">
                <span className="material-symbols-outlined text-primary shrink-0">
                  tips_and_updates
                </span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary mb-1">
                    Agent Suggestion
                  </h3>
                  <p className="font-body-sm text-body-sm text-[#94a3b8]">
                    Identified potential race condition in
                    <code className="bg-surface-container px-1 py-0.5 rounded text-secondary">
                      auth.ts
                    </code>
                    . Suggested refactor to use async/await consistently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-unit-lg bg-surface-container-lowest border-t border-outline-variant/10 md:ml-64 relative z-10 w-[calc(100%-16rem)] hidden md:block">
        <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
          <span className="font-label-caps text-primary text-label-caps">
            © 2024 PRPilot AI
          </span>
          <div className="flex gap-4">
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover flex items-center gap-1"
              href="#"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              System Status
            </a>
          </div>
        </div>
      </footer>
      {/* script omitted (inert in faithful React render) */}
    </div>
  );
}
