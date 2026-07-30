// AUTO-GENERATED — faithful 1:1 translation of the Stitch HTML document.
// Do NOT hand-edit: regenerate from source to preserve visual fidelity.
import React from "react";

export default function DashboardOverviewPage() {
  return (
    <div className="font-body-base text-body-base antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
        body {
            background-color: #0b1326;
            color: #f8fafc;
        }
        .glass-card {
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(51, 65, 85, 0.6);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            transform-style: preserve-3d;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-tilt {
            /* 3D tilt will be applied via JS */
        }
        .hover-lift {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(79, 70, 229, 0.1);
        }
        .btn-glow {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: linear-gradient(135deg, #4f46e5, #03b5d3);
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 0 10px rgba(79, 70, 229, 0.4);
        }
        .btn-glow:hover {
            box-shadow: 0 0 20px rgba(79, 70, 229, 0.8), inset 0 1px 0 rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }
        .syntax-addition { background-color: rgba(76, 215, 246, 0.1); color: #4cd7f6; }
        .syntax-deletion { background-color: rgba(255, 180, 171, 0.1); color: #ffb4ab; }
        
        .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .nav-link {
            position: relative;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #c3c0ff;
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
        }

        .animated-gradient-border {
            position: relative;
            background: rgba(15, 23, 42, 0.8);
            background-clip: padding-box;
            border: solid 2px transparent;
            border-radius: 0.5rem;
        }
        .animated-gradient-border::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -2px;
            border-radius: inherit;
            background: linear-gradient(90deg, #4f46e5, #03b5d3, #4f46e5);
            background-size: 200% 200%;
            animation: gradientBorder 3s ease infinite;
        }

        @keyframes gradientBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    ` } />
      {/* Background Shader */}
      <div className="fixed inset-0 w-full h-full z-[-1] opacity-50 bg-background" />
      {/* TopNavBar */}
      <header className="bg-surface/80 backdrop-blur-lg font-body-base text-body-base fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-sm cursor-pointer">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
              <span className="font-headline-md font-bold text-primary text-[24px]">
                PRPilot
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-lg ml-lg">
              <a className="nav-link text-primary font-bold hover:text-primary transition-colors duration-200 cursor-pointer active active:opacity-80 pb-1" href="#">
                Dashboard
              </a>
              <a className="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80 pb-1" href="#">
                Repositories
              </a>
              <a className="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80 pb-1" href="#">
                Workflows
              </a>
              <a className="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80 pb-1" href="#">
                Settings
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-md">
            <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant/50">
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/30 cursor-pointer">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsYavqyHdGEEP76EqKQOCYmMs1ocV1517Vt-AnCWowsmy_gUsGqw9AGWMzk6IdPRBeOW2LzN3ty7JPaXTopRyZLCeX-gjLUXpYpUJK5C-zsxy8BEcoX8GuQrTLoSvG_5lPHc-pNTkq2FUAh9xs4Z0-dTqmTH376rrNoXRY948LLPySiyHZSAyC0Qz4MHN0vnhRHEBtr8YaznQZbmkZfD29KTP45B0I3KI4_seOJWSQ5EiPoeKEBavOH6k0" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 pt-16 h-screen">
        {/* SideNavBar */}
        <aside className="bg-surface-container/50 backdrop-blur-xl font-label-caps text-label-caps h-[calc(100vh-64px)] w-64 fixed left-0 top-16 border-r border-outline-variant/20 inner-glow-subtle hidden md:flex flex-col p-unit-md gap-unit-sm z-40">
          <div className="px-md py-lg border-b border-outline-variant/20 mb-md">
            <h2 className="font-headline-md text-primary mb-1 text-[24px]">
              Dashboard
            </h2>
            <p className="text-on-surface-variant text-xs font-body-sm">
              AI Automation Health
            </p>
          </div>
          <nav className="flex-1 flex flex-col gap-unit-sm space-y-2">
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-bright/30 transition-all scale-98-active cursor-pointer" href="#">
              <span className="material-symbols-outlined">
                add_link
              </span>
              <span className="font-body-base font-medium">
                Connect Repository
              </span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-bright/30 transition-all scale-98-active cursor-pointer" href="#">
              <span className="material-symbols-outlined">
                auto_awesome
              </span>
              <span className="font-body-base font-medium">
                New Automation
              </span>
            </a>
            <a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-bright/30 transition-all scale-98-active cursor-pointer" href="#">
              <span className="material-symbols-outlined">
                description
              </span>
              <span className="font-body-base font-medium">
                View Docs
              </span>
            </a>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-64 p-gutter lg:p-margin overflow-y-auto space-y-section">
          <div className="max-w-[1400px] mx-auto space-y-section">
            {/* Header */}
            <div className="flex justify-between items-end fade-in-up">
              <div className="space-y-sm">
                <h1 className="font-display-lg text-on-surface text-[48px]">
                  Analytics Overview
                </h1>
                <p className="text-on-surface-variant font-body-base">
                  Real-time telemetry for your automated PR workflows.
                </p>
              </div>
              <button className="btn-glow px-lg py-sm rounded-lg font-label-caps text-on-primary flex items-center gap-sm">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
                                        Generate Report
                    
              </button>
            </div>
            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md fade-in-up" style={{ transitionDelay: "100ms" }}>
              {/* KPI 1 */}
              <div className="glass-card rounded-xl p-lg hover-lift hover-tilt flex flex-col justify-between space-y-md">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-caps tracking-wide">
                    PRs Opened This Week
                  </span>
                  <div className="p-2 bg-primary-container/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">
                      merge_type
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-sm">
                  <span className="font-mono-code text-[36px] font-bold text-on-surface leading-none">
                    24
                  </span>
                  <span className="text-secondary font-mono-code text-sm flex items-center bg-secondary/10 px-2 py-1 rounded-full mb-1">
                    <span className="material-symbols-outlined text-[14px] mr-1">
                      trending_up
                    </span>
                     +18%
                            
                  </span>
                </div>
              </div>
              {/* KPI 2 */}
              <div className="glass-card rounded-xl p-lg hover-lift hover-tilt flex flex-col justify-between space-y-md">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-caps tracking-wide">
                    Avg. Time to PR
                  </span>
                  <div className="p-2 bg-primary-container/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">
                      timer
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-sm">
                  <span className="font-mono-code text-[36px] font-bold text-on-surface leading-none">
                    4.2
                  </span>
                  <span className="text-on-surface-variant font-mono-code text-sm mb-1">
                    min
                  </span>
                  <span className="text-secondary font-mono-code text-sm flex items-center bg-secondary/10 px-2 py-1 rounded-full mb-1 ml-auto">
                    <span className="material-symbols-outlined text-[14px] mr-1">
                      trending_down
                    </span>
                     -31%
                            
                  </span>
                </div>
              </div>
              {/* KPI 3 */}
              <div className="glass-card rounded-xl p-lg hover-lift hover-tilt flex flex-col justify-between space-y-md">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-caps tracking-wide">
                    Tickets Processed
                  </span>
                  <div className="p-2 bg-primary-container/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">
                      task_alt
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-sm">
                  <span className="font-mono-code text-[36px] font-bold text-on-surface leading-none">
                    147
                  </span>
                  <span className="text-secondary font-mono-code text-sm flex items-center bg-secondary/10 px-2 py-1 rounded-full mb-1">
                    <span className="material-symbols-outlined text-[14px] mr-1">
                      trending_up
                    </span>
                     +42%
                            
                  </span>
                </div>
              </div>
              {/* KPI 4 */}
              <div className="glass-card rounded-xl p-lg hover-lift hover-tilt flex flex-col justify-between space-y-md">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-caps tracking-wide">
                    Quality Gate Pass Rate
                  </span>
                  <div className="p-2 bg-primary-container/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">
                      verified
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-sm mb-3">
                    <span className="font-mono-code text-[36px] font-bold text-on-surface leading-none">
                      96%
                    </span>
                    <span className="text-secondary font-mono-code text-sm flex items-center bg-secondary/10 px-2 py-1 rounded-full mb-1">
                      <span className="material-symbols-outlined text-[14px] mr-1">
                        trending_up
                      </span>
                       +3%
                                
                    </span>
                  </div>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-secondary to-primary h-full w-[96%]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Complex Layout Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-lg fade-in-up" style={{ transitionDelay: "200ms" }}>
              {/* Left: Recent Runs Table */}
              <div className="glass-card rounded-xl p-lg xl:col-span-1 flex flex-col space-y-md">
                <div className="flex justify-between items-center mb-sm">
                  <h3 className="font-headline-md text-on-surface text-[24px]">
                    Recent AI Runs
                  </h3>
                  <button className="text-primary hover:text-secondary text-sm font-label-caps transition-colors">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-outline-variant/30 text-on-surface-variant font-label-caps">
                        <th className="pb-sm font-normal">
                          Ticket
                        </th>
                        <th className="pb-sm font-normal">
                          Status
                        </th>
                        <th className="pb-sm font-normal text-right">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-md">
                          <div className="flex items-center gap-sm">
                            <span className="material-symbols-outlined text-primary text-sm group-hover:scale-110 transition-transform">
                              commit
                            </span>
                            <span className="font-mono-code text-on-surface">
                              SCRUM-42
                            </span>
                          </div>
                        </td>
                        <td className="py-md">
                          <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-2.5 py-1 rounded-full text-xs font-label-caps">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                             Success
                                            
                          </span>
                        </td>
                        <td className="py-md text-right font-mono-code text-on-surface-variant text-sm">
                          1m 12s
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant/10 hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-md">
                          <div className="flex items-center gap-sm">
                            <span className="material-symbols-outlined text-outline text-sm group-hover:scale-110 transition-transform">
                              sync
                            </span>
                            <span className="font-mono-code text-on-surface">
                              SCRUM-41
                            </span>
                          </div>
                        </td>
                        <td className="py-md">
                          <span className="inline-flex items-center gap-1.5 bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-full text-xs font-label-caps">
                            <span className="w-1.5 h-1.5 rounded-full bg-outline animate-pulse" />
                             In Progress
                                            
                          </span>
                        </td>
                        <td className="py-md text-right font-mono-code text-on-surface-variant text-sm">
                          45s
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-md">
                          <div className="flex items-center gap-sm">
                            <span className="material-symbols-outlined text-error text-sm group-hover:scale-110 transition-transform">
                              warning
                            </span>
                            <span className="font-mono-code text-on-surface">
                              SCRUM-39
                            </span>
                          </div>
                        </td>
                        <td className="py-md">
                          <span className="inline-flex items-center gap-1.5 bg-error/10 text-error px-2.5 py-1 rounded-full text-xs font-label-caps">
                            <span className="w-1.5 h-1.5 rounded-full bg-error" />
                             Failed
                                            
                          </span>
                        </td>
                        <td className="py-md text-right font-mono-code text-on-surface-variant text-sm">
                          3m 04s
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Right: Live Code Analysis */}
              <div className="animated-gradient-border p-lg xl:col-span-2 flex flex-col space-y-md fade-in-up" style={{ transitionDelay: "300ms" }}>
                <div className="flex justify-between items-center border-b border-outline-variant/30 pb-md">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">
                      code
                    </span>
                    <h3 className="font-headline-md text-on-surface text-[24px]">
                      Live Analysis: SCRUM-41
                    </h3>
                  </div>
                  <div className="flex gap-sm">
                    <div className="px-3 py-1.5 rounded bg-surface-container border border-outline-variant/30 font-mono-code text-xs text-on-surface-variant">
                      src/components/Dashboard.tsx
                    </div>
                  </div>
                </div>
                {/* Code Diff View */}
                <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/20 overflow-hidden flex-1 font-mono-code text-sm">
                  {/* Line Numbers & Code */}
                  <div className="flex w-full">
                    <div className="bg-surface-container/50 text-outline-variant px-3 py-4 text-right border-r border-outline-variant/20 select-none flex flex-col space-y-1">
                      <span>
                        24
                      </span>
                      <span>
                        25
                      </span>
                      <span>
                        26
                      </span>
                      <span>
                        27
                      </span>
                      <span>
                        28
                      </span>
                      <span>
                        29
                      </span>
                    </div>
                    <div className="flex-1 py-4 overflow-x-auto whitespace-pre space-y-1">
                      <div className="px-4 text-on-surface-variant">
                          return (
                      </div>
                      <div className="px-4 text-on-surface-variant">
                            &lt;div className="dashboard-container"&gt;
                      </div>
                      <div className="px-4 syntax-deletion flex items-center">
                        <span className="w-4 inline-block select-none opacity-50">
                          -
                        </span>
                              &lt;MetricsRow data=&#123;legacyData&#125; /&gt;
                      </div>
                      <div className="px-4 syntax-addition flex items-center">
                        <span className="w-4 inline-block select-none opacity-50">
                          +
                        </span>
                              &lt;MetricsRow data=&#123;liveTelemetry&#125; animated=&#123;true&#125; /&gt;
                      </div>
                      <div className="px-4 text-on-surface-variant">
                            &lt;/div&gt;
                      </div>
                      <div className="px-4 text-on-surface-variant">
                          );
                      </div>
                    </div>
                  </div>
                  {/* Analysis Context */}
                  <div className="bg-primary/10 border-t border-primary/20 p-md flex items-start gap-md">
                    <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      smart_toy
                    </span>
                    <div className="space-y-1">
                      <p className="text-on-surface text-sm font-medium">
                        AI Suggestion Applied
                      </p>
                      <p className="text-on-surface-variant text-sm">
                        Updated metrics prop to use real-time telemetry stream and enabled hardware-accelerated animations for better performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="bg-surface-container-lowest font-body-sm text-body-sm w-full py-lg border-t border-outline-variant/10 mt-section fade-in-up">
            <div className="flex justify-between items-center px-gutter max-w-container-max mx-auto">
              <span className="text-on-surface-variant">
                © 2024 PRPilot AI
              </span>
              <div className="flex gap-lg">
                <a className="text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover" href="#">
                  Privacy Policy
                </a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover" href="#">
                  Terms of Service
                </a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors opacity-90-hover flex items-center gap-1.5" href="#">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]" />
                   System Status
                        
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
      {/* script omitted (inert in faithful React render) */}
    </div>
  );
}
