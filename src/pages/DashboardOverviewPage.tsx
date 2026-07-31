// AUTO-GENERATED — faithful 1:1 translation of the Stitch HTML document.
// Do NOT hand-edit: regenerate from source to preserve visual fidelity.
import React from "react";

export default function DashboardOverviewPage() {
  return (
    <div className="font-body-base text-body-base text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <style dangerouslySetInnerHTML={{ __html: `
        body {
            background-color: #030712;
            color: #f8fafc;
            background-image: 
                radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(3, 181, 211, 0.1) 0px, transparent 50%);
            background-attachment: fixed;
            overflow-x: hidden;
        }

        .glass-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(51, 65, 85, 0.6);
            border-top-color: rgba(71, 85, 105, 0.8);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 15px rgba(79, 70, 229, 0.1);
        }

        .metric-value {
            font-family: 'JetBrains Mono', monospace;
            background: linear-gradient(to right, #e2dfff, #c3c0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .btn-primary {
            background: #4f46e5;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-primary:hover {
            box-shadow: 0 0 15px rgba(76, 215, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transform: scale(1.02);
        }

        /* Syntax Highlighting Mock */
        .token.keyword { color: #c678dd; }
        .token.string { color: #98c379; }
        .token.function { color: #61afef; }
        .token.comment { color: #5c6370; font-style: italic; }
        .token.operator { color: #56b6c2; }
    ` } />
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
          <div className="flex items-center gap-lg">
            <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
                                  PRPilot
                
            </div>
            <div className="hidden md:flex items-center gap-md ml-xl">
              <a className="text-primary font-bold border-b-2 border-primary pb-1 text-body-sm transition-colors duration-200" href="#">
                Dashboard
              </a>
              <a className="text-on-surface-variant font-medium text-body-sm hover:text-primary transition-colors duration-200" href="#">
                Repositories
              </a>
              <a className="text-on-surface-variant font-medium text-body-sm hover:text-primary transition-colors duration-200" href="#">
                Workflows
              </a>
              <a className="text-on-surface-variant font-medium text-body-sm hover:text-primary transition-colors duration-200" href="#">
                Settings
              </a>
            </div>
          </div>
          <div className="flex items-center gap-md text-on-surface-variant">
            <button className="hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>
            <button className="hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div className="flex h-screen pt-16">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col h-full w-64 fixed left-0 top-16 bg-surface-container/50 backdrop-blur-xl border-r border-outline-variant/20 inner-glow-subtle p-unit-md gap-unit-sm z-40">
          <div className="mb-lg px-md py-sm">
            <div className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider mb-sm">
              Workspace
            </div>
            <div className="flex items-center gap-sm">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
                P
              </div>
              <div>
                <div className="font-body-sm font-bold text-on-surface">
                  Production Env
                </div>
                <div className="text-label-caps font-label-caps text-on-surface-variant">
                  Free Plan
                </div>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-unit-sm mt-md">
            <a className="flex items-center gap-md px-md py-sm rounded-md bg-primary-container/10 text-primary border-l-4 border-primary hover:bg-surface-bright/30 transition-all font-body-sm" href="#">
              <span className="material-symbols-outlined" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>
                dashboard
              </span>
                                  Analytics
                
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-md text-on-surface-variant border-l-4 border-transparent hover:bg-surface-bright/30 hover:text-on-surface transition-all font-body-sm" href="#">
              <span className="material-symbols-outlined">
                add_link
              </span>
                                  Connect Repository
                
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-md text-on-surface-variant border-l-4 border-transparent hover:bg-surface-bright/30 hover:text-on-surface transition-all font-body-sm" href="#">
              <span className="material-symbols-outlined">
                auto_awesome
              </span>
                                  New Automation
                
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-md text-on-surface-variant border-l-4 border-transparent hover:bg-surface-bright/30 hover:text-on-surface transition-all font-body-sm" href="#">
              <span className="material-symbols-outlined">
                description
              </span>
                                  View Docs
                
            </a>
          </nav>
        </aside>
        {/* Main Content Canvas */}
        <main className="flex-1 ml-0 md:ml-64 p-gutter max-w-7xl mx-auto w-full overflow-y-auto pb-2xl">
          {/* Header Section */}
          <header className="mb-xl mt-md fade-in-up">
            <h1 className="font-display-lg text-display-lg text-primary-fixed mb-sm">
              Analytics Overview
            </h1>
            <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl">
              Real-time performance metrics for your automation workflows across all connected repositories.
            </p>
          </header>
          {/* KPI Row (Bento Grid Style) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl fade-in-up" style={{ transitionDelay: "100ms" }}>
            {/* KPI 1 */}
            <div className="glass-card rounded-xl p-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">
                  merge
                </span>
              </div>
              <div className="text-label-caps font-label-caps text-on-surface-variant mb-sm">
                PRs Processed
              </div>
              <div className="flex items-baseline gap-sm">
                <span className="metric-value text-3xl font-bold">
                  1,284
                </span>
                <span className="font-mono-code text-mono-code text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-xs flex items-center">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_upward
                  </span>
                   12.5%
                        
                </span>
              </div>
              <div className="mt-sm h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full" />
              </div>
            </div>
            {/* KPI 2 */}
            <div className="glass-card rounded-xl p-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">
                  timer
                </span>
              </div>
              <div className="text-label-caps font-label-caps text-on-surface-variant mb-sm">
                Avg. Merge Time
              </div>
              <div className="flex items-baseline gap-sm">
                <span className="metric-value text-3xl font-bold">
                  18m 42s
                </span>
                <span className="font-mono-code text-mono-code text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded text-xs flex items-center">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_downward
                  </span>
                   4.2%
                        
                </span>
              </div>
              <div className="mt-sm text-xs text-on-surface-variant font-mono-code">
                vs 19m 30s last week
              </div>
            </div>
            {/* KPI 3 */}
            <div className="glass-card rounded-xl p-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">
                  verified
                </span>
              </div>
              <div className="text-label-caps font-label-caps text-on-surface-variant mb-sm">
                Quality Pass Rate
              </div>
              <div className="flex items-baseline gap-sm">
                <span className="metric-value text-3xl font-bold">
                  99.8%
                </span>
                <span className="font-mono-code text-mono-code text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded text-xs">
                                              Stable
                        
                </span>
              </div>
              <div className="mt-sm h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-[99.8%] rounded-full" />
              </div>
            </div>
            {/* KPI 4 */}
            <div className="glass-card rounded-xl p-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">
                  smart_toy
                </span>
              </div>
              <div className="text-label-caps font-label-caps text-on-surface-variant mb-sm">
                Active Agents
              </div>
              <div className="flex items-baseline gap-sm">
                <span className="metric-value text-3xl font-bold">
                  24
                </span>
                <span className="font-mono-code text-mono-code text-secondary bg-secondary/10 px-2 py-0.5 rounded text-xs flex items-center">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>
                   Scaling
                        
                </span>
              </div>
              <div className="mt-sm flex gap-1">
                <div className="h-1 flex-1 bg-secondary rounded-full animate-pulse" />
                <div className="h-1 flex-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
                <div className="h-1 flex-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                <div className="h-1 flex-1 bg-surface-container-highest rounded-full" />
              </div>
            </div>
          </section>
          {/* Main Grid Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg fade-in-up" style={{ transitionDelay: "200ms" }}>
            {/* Left Column (Table) */}
            <div className="lg:col-span-2 glass-card rounded-xl flex flex-col">
              <div className="p-lg border-b border-outline-variant/30 flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md text-primary-fixed">
                  Recent Automation Runs
                </h2>
                <button className="text-label-caps font-label-caps text-secondary hover:text-primary transition-colors flex items-center gap-1">
                                              View All 
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/20 bg-surface-container-low/50">
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant font-medium">
                        Repository
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant font-medium">
                        Trigger
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant font-medium">
                        Status
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant font-medium">
                        Duration
                      </th>
                      <th className="p-md font-label-caps text-label-caps text-on-surface-variant font-medium text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm">
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant">
                            folder
                          </span>
                          <span className="font-mono-code text-primary-fixed">
                            api-gateway
                          </span>
                        </div>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        PR #1042
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-400/10 text-emerald-400 text-xs font-mono-code">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                           Success
                                        
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant font-mono-code">
                        45s
                      </td>
                      <td className="p-md text-right">
                        <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant">
                            folder
                          </span>
                          <span className="font-mono-code text-primary-fixed">
                            frontend-core
                          </span>
                        </div>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        Push to main
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-mono-code animate-pulse">
                          <span className="material-symbols-outlined text-[14px] animate-spin">
                            sync
                          </span>
                           In Progress
                                        
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant font-mono-code">
                        1m 12s...
                      </td>
                      <td className="p-md text-right">
                        <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant">
                            folder
                          </span>
                          <span className="font-mono-code text-primary-fixed">
                            auth-service
                          </span>
                        </div>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        PR #89
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-error/10 text-error text-xs font-mono-code">
                          <span className="material-symbols-outlined text-[14px]">
                            error
                          </span>
                           Failed
                                        
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant font-mono-code">
                        12s
                      </td>
                      <td className="p-md text-right">
                        <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-bright/20 transition-colors group">
                      <td className="p-md">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant">
                            folder
                          </span>
                          <span className="font-mono-code text-primary-fixed">
                            payment-worker
                          </span>
                        </div>
                      </td>
                      <td className="p-md text-on-surface-variant">
                        Daily Schedule
                      </td>
                      <td className="p-md">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-400/10 text-emerald-400 text-xs font-mono-code">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                           Success
                                        
                        </span>
                      </td>
                      <td className="p-md text-on-surface-variant font-mono-code">
                        2m 04s
                      </td>
                      <td className="p-md text-right">
                        <button className="text-on-surface-variant hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Right Column (Live Code Analysis) */}
            <div className="glass-card rounded-xl flex flex-col relative overflow-hidden">
              <div className="p-md border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
                <h3 className="font-body-base font-bold text-primary-fixed flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    psychology
                  </span>
                   Live Analysis
                        
                </h3>
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
              </div>
              <div className="p-md flex-1 bg-[#1e1e2e] font-mono-code text-[13px] leading-relaxed overflow-hidden relative">
                {/* Simulated Code Diff */}
                <div className="text-on-surface-variant opacity-50 select-none border-b border-outline-variant/30 pb-2 mb-2">
                                              utils/crypto.js
                        
                </div>
                <div className="pl-2 border-l-2 border-transparent text-on-surface-variant">
                  <span className="token keyword">
                    import
                  </span>
                   &#123; createHash &#125; 
                  <span className="token keyword">
                    from
                  </span>
                  <span className="token string">
                    'crypto'
                  </span>
                  ;
                        
                </div>
                <div className="pl-2 border-l-2 border-transparent text-on-surface-variant mt-2">
                  <span className="token keyword">
                    export
                  </span>
                  <span className="token keyword">
                    function
                  </span>
                  <span className="token function">
                    hashPassword
                  </span>
                  (password) &#123;
                        
                </div>
                {/* Removed Line */}
                <div className="pl-2 border-l-2 border-error bg-error/10 text-error/80 -mx-md px-md relative group">
                  <div className="absolute left-1 top-0 opacity-50">
                    -
                  </div>
                  <span className="ml-4">
                    <span className="token keyword">
                      return
                    </span>
                    <span className="token function">
                      createHash
                    </span>
                    (
                    <span className="token string">
                      'md5'
                    </span>
                    ).
                    <span className="token function">
                      update
                    </span>
                    (password).
                    <span className="token function">
                      digest
                    </span>
                    (
                    <span className="token string">
                      'hex'
                    </span>
                    );
                  </span>
                </div>
                {/* Added Line */}
                <div className="pl-2 border-l-2 border-emerald-400 bg-emerald-400/10 text-emerald-400 -mx-md px-md relative">
                  <div className="absolute left-1 top-0 opacity-50">
                    +
                  </div>
                  <span className="ml-4">
                    <span className="token keyword">
                      return
                    </span>
                    <span className="token function">
                      createHash
                    </span>
                    (
                    <span className="token string">
                      'sha256'
                    </span>
                    ).
                    <span className="token function">
                      update
                    </span>
                    (password).
                    <span className="token function">
                      digest
                    </span>
                    (
                    <span className="token string">
                      'hex'
                    </span>
                    );
                  </span>
                  {/* AI Tooltip */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container text-xs px-2 py-1 rounded shadow-lg flex items-center gap-1 z-10">
                    <span className="material-symbols-outlined text-[14px]">
                      auto_awesome
                    </span>
                     Fixed Security Vulnerability
                            
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-transparent text-on-surface-variant">
                                              &#125;
                        
                </div>
                {/* Gradient fade at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#1e1e2e] to-transparent pointer-events-none" />
              </div>
              <div className="p-md bg-surface-container-low/80 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="text-xs text-on-surface-variant font-mono-code">
                  Agent: SecurityBot_v2
                </div>
                <button className="btn-primary px-4 py-1.5 rounded-md text-white font-bold text-xs flex items-center gap-1">
                                              Approve Change
                        
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* Footer */}
      <footer className="bg-surface-container-lowest py-unit-lg border-t border-outline-variant/10 flex justify-between items-center px-gutter max-w-container-max mx-auto md:ml-64 relative z-10 w-full">
        <div className="font-label-caps text-primary text-label-caps">
          © 2024 PRPilot AI
        </div>
        <div className="flex gap-md">
          <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-90-hover" href="#">
            Privacy Policy
          </a>
          <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-90-hover" href="#">
            Terms of Service
          </a>
          <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-90-hover" href="#">
            System Status
          </a>
        </div>
      </footer>
      {/* script omitted (inert in faithful React render) */}
    </div>
  );
}
