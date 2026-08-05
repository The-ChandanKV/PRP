// AUTO-GENERATED — faithful 1:1 translation of the Stitch HTML document.
// Do NOT hand-edit: regenerate from source to preserve visual fidelity.
import React from "react";

export default function DashboardOverviewPage() {
  return (
    <div className="font-body-base antialiased selection:bg-primary-container selection:text-white min-h-screen flex flex-col">
      <style
        dangerouslySetInnerHTML={{
          __html: `
      body {
        background-color: #030712;
        color: #f8fafc;
      }
      
      .glass-card {
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }
      
      .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }

      .tilt-card {
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }
      
      .btn-glow:hover {
        box-shadow: 0 0 15px rgba(79, 70, 229, 0.4);
      }
      
      .nav-link {
        position: relative;
      }
      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #4cd7f6;
        transition: width 0.3s ease;
      }
      .nav-link:hover::after, .nav-link.active::after {
        width: 100%;
      }
      
      /* Nebula Background Animation */
      .bg-nebula {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #030712 100%);
        overflow: hidden;
      }
      .bg-nebula::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: 
          radial-gradient(circle at 30% 70%, rgba(76, 215, 246, 0.05) 0%, transparent 40%),
          radial-gradient(circle at 70% 30%, rgba(195, 192, 255, 0.05) 0%, transparent 40%);
        animation: rotateBg 40s linear infinite;
      }
      @keyframes rotateBg {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .parallax-hero {
        position: relative;
        overflow: hidden;
      }
      
      .text-gradient {
        background: linear-gradient(to right, #4cd7f6, #c3c0ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `,
        }}
      />
      {/* Animated Background */}
      <div className="bg-nebula" />
      {/* Top Navigation (Shared Component) */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 shadow-sm transition-all duration-300 flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto left-0 right-0">
        <div className="flex items-center gap-lg">
          <div className="font-headline-md font-bold text-primary flex items-center gap-sm cursor-pointer">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
            PRPilot
          </div>
          <div className="hidden md:flex gap-md ml-lg">
            <a
              className="nav-link active text-primary font-bold font-body-base pb-1"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-base pb-1"
              href="#"
            >
              Repositories
            </a>
            <a
              className="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-base pb-1"
              href="#"
            >
              Workflows
            </a>
            <a
              className="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-base pb-1"
              href="#"
            >
              Settings
            </a>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </nav>
      {/* Main Content Area with SideNav Layout */}
      <div className="flex flex-1 pt-16">
        {/* SideNav (Shared Component) */}
        <aside className="hidden md:flex h-screen w-64 fixed left-0 top-16 bg-surface-container/50 backdrop-blur-xl border-r border-outline-variant/20 flex-col p-unit-md gap-unit-sm z-40">
          <div className="px-md py-lg mb-sm">
            <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mb-xs">
              Dashboard
            </h2>
            <p className="font-body-sm text-body-sm text-secondary">
              AI Automation Health
            </p>
          </div>
          <a
            className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-bright/30 transition-all text-on-surface-variant scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined">add_link</span>
            <span className="font-body-base">Connect Repository</span>
          </a>
          <a
            className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-bright/30 transition-all text-on-surface-variant scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-body-base">New Automation</span>
          </a>
          <a
            className="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container/10 text-primary border-r-4 border-primary scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="font-body-base font-semibold">Analytics</span>
          </a>
          <a
            className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-bright/30 transition-all text-on-surface-variant scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined">description</span>
            <span className="font-body-base">View Docs</span>
          </a>
        </aside>
        {/* Canvas */}
        <main className="flex-1 md:ml-64 p-gutter pb-2xl parallax-hero min-h-screen">
          {/* Hero Header */}
          <header className="mb-xl mt-lg reveal">
            <h1 className="font-display-lg md:font-display-lg-mobile text-on-surface mb-sm tracking-tight text-gradient">
              Analytics Overview
            </h1>
            <p className="font-body-base text-on-surface-variant max-w-2xl">
              Real-time performance metrics and AI intervention insights for
              your repositories.
            </p>
          </header>
          {/* KPI Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-xl reveal">
            {/* KPI 1 */}
            <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex justify-between items-start mb-md relative z-10">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  PRs Processed
                </span>
                <span className="material-symbols-outlined text-secondary">
                  merge_type
                </span>
              </div>
              <div className="font-mono-code text-[32px] font-bold text-on-surface mb-xs relative z-10">
                1,284
              </div>
              <div className="font-body-sm text-body-sm text-secondary relative z-10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                +12% this week
              </div>
            </div>
            {/* KPI 2 */}
            <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex justify-between items-start mb-md relative z-10">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Avg Merge Time
                </span>
                <span className="material-symbols-outlined text-primary">
                  timer
                </span>
              </div>
              <div className="font-mono-code text-[32px] font-bold text-on-surface mb-xs relative z-10">
                18m 42s
              </div>
              <div className="font-body-sm text-body-sm text-secondary relative z-10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">
                  trending_down
                </span>
                -5m since AI
              </div>
            </div>
            {/* KPI 3 */}
            <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex justify-between items-start mb-md relative z-10">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Quality Pass Rate
                </span>
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
              </div>
              <div className="font-mono-code text-[32px] font-bold text-on-surface mb-xs relative z-10">
                99.8%
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant relative z-10 flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">
                  horizontal_rule
                </span>
                Steady
              </div>
            </div>
            {/* KPI 4 */}
            <div className="glass-card rounded-xl p-lg tilt-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex justify-between items-start mb-md relative z-10">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Active Agents
                </span>
                <span className="material-symbols-outlined text-primary">
                  smart_toy
                </span>
              </div>
              <div className="font-mono-code text-[32px] font-bold text-on-surface mb-xs relative z-10">
                24
              </div>
              <div className="font-body-sm text-body-sm text-secondary relative z-10 flex items-center gap-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                All systems nominal
              </div>
            </div>
          </section>
          {/* Complex Layout Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg reveal">
            {/* Recent Runs Table */}
            <section
              className="lg:col-span-2 glass-card rounded-xl overflow-hidden flex flex-col tilt-card"
              style={{ transformOrigin: "center left" }}
            >
              <div className="p-lg border-b border-outline-variant/20 flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Recent Automation Runs
                </h2>
                <button className="text-secondary font-label-caps text-label-caps uppercase hover:text-primary transition-colors flex items-center gap-xs">
                  View All
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50">
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Repository
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Status
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant uppercase">
                        Agent
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant uppercase text-right">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-mono-code text-mono-code text-on-surface">
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md flex items-center gap-sm">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                          folder
                        </span>
                        core-api-v2
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-secondary/10 text-secondary font-label-caps text-[10px] uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Success
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        ReviewBot
                      </td>
                      <td className="p-md text-right text-on-surface-variant">
                        2m ago
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md flex items-center gap-sm">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                          folder
                        </span>
                        frontend-monorepo
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-secondary/10 text-secondary font-label-caps text-[10px] uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          Success
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        LintFixer
                      </td>
                      <td className="p-md text-right text-on-surface-variant">
                        15m ago
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md flex items-center gap-sm">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                          folder
                        </span>
                        payment-gateway
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-primary-container/20 text-primary font-label-caps text-[10px] uppercase">
                          <span className="material-symbols-outlined text-[12px] animate-spin">
                            sync
                          </span>
                          Running
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant">SecScan</td>
                      <td className="p-md text-right text-on-surface-variant">
                        Just now
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md flex items-center gap-sm">
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                          folder
                        </span>
                        legacy-auth
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-xs px-2 py-1 rounded bg-error/10 text-error font-label-caps text-[10px] uppercase">
                          <span className="material-symbols-outlined text-[12px]">
                            warning
                          </span>
                          Failed
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        ReviewBot
                      </td>
                      <td className="p-md text-right text-on-surface-variant">
                        1h ago
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* Live Analysis Code Diff */}
            <section
              className="lg:col-span-1 glass-card rounded-xl overflow-hidden flex flex-col tilt-card"
              style={{ transformOrigin: "center right" }}
            >
              <div className="p-md border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low/50">
                <div className="flex items-center gap-sm">
                  <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-wide">
                    Live Analysis
                  </h3>
                </div>
                <span className="font-mono-code text-[12px] text-on-surface-variant">
                  utils.ts
                </span>
              </div>
              <div className="p-sm bg-[#0d1117] flex-1 overflow-y-auto font-mono-code text-[12px] leading-relaxed">
                <div className="flex text-on-surface-variant/50">
                  <div className="w-8 text-right pr-2 select-none">12</div>
                  <div className="pl-2">
                    function calculateTotal(items) &#123;
                  </div>
                </div>
                <div className="flex bg-error/10 text-error">
                  <div className="w-8 text-right pr-2 border-r border-error/30 select-none">
                    -13
                  </div>
                  <div className="pl-2">
                    return items.reduce((a, b) =&gt; a + b, 0);
                  </div>
                </div>
                <div className="flex bg-secondary/10 text-secondary">
                  <div className="w-8 text-right pr-2 border-r border-secondary/30 select-none">
                    +13
                  </div>
                  <div className="pl-2">
                    return items.reduce((sum, item) =&gt; sum + (item.price ||
                    0), 0);
                  </div>
                </div>
                <div className="flex text-on-surface-variant/50">
                  <div className="w-8 text-right pr-2 select-none">14</div>
                  <div className="pl-2">&#125;</div>
                </div>
                <div className="mt-md p-sm rounded bg-surface-container border border-outline-variant/20">
                  <div className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-secondary text-[16px] mt-xs">
                      auto_awesome
                    </span>
                    <div>
                      <p className="font-body-sm text-[12px] text-on-surface mb-xs">
                        AI Optimization Suggested
                      </p>
                      <p className="text-on-surface-variant text-[11px]">
                        Prevented potential NaN error by mapping object property
                        safely with fallback.
                      </p>
                      <div className="mt-sm flex gap-sm">
                        <button className="bg-primary-container text-white px-3 py-1 rounded font-label-caps text-[10px] uppercase hover:bg-primary transition-colors btn-glow">
                          Apply
                        </button>
                        <button className="border border-outline-variant/30 text-on-surface-variant px-3 py-1 rounded font-label-caps text-[10px] uppercase hover:bg-surface-bright transition-colors">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* Footer (Shared Component) */}
      <footer className="w-full py-unit-lg bg-surface-container-lowest border-t border-outline-variant/10 relative z-10 mt-auto">
        <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto md:ml-64">
          <div className="font-label-caps text-primary uppercase">
            © 2024 PRPilot AI
          </div>
          <div className="flex gap-md">
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
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover"
              href="#"
            >
              System Status
            </a>
          </div>
        </div>
      </footer>
      {/* Interactive Scripts */}
      {/* script omitted (inert in faithful React render) */}
    </div>
  );
}
