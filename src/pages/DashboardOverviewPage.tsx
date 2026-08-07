// AUTO-GENERATED — faithful 1:1 translation of the Stitch HTML document.
// Do NOT hand-edit: regenerate from source to preserve visual fidelity.
import React from "react";

export default function DashboardOverviewPage() {
  return (
    <div className="bg-background text-on-background font-body-base antialiased min-h-screen flex overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `.glass-card {
            background-color: rgba(30, 41, 59, 0.5);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(51, 65, 85, 0.6);
            border-top: 1px solid rgba(148, 163, 184, 0.2);
        }
        
        .nav-active {
            background: rgba(79, 70, 229, 0.1);
            color: #c3c0ff;
            border-right: 4px solid #c3c0ff;
        }

        .gradient-text {
            background: linear-gradient(to right, #c3c0ff, #4cd7f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        /* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.2);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.4);
        }
    


        @keyframes shimmer {
            100% {
                transform: translateX(200%);
            }
        }`,
        }}
      />
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(51, 65, 85, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(51, 65, 85, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col p-unit-md gap-unit-sm h-screen w-64 fixed left-0 top-0 bg-surface-container/50 backdrop-blur-xl border-r border-outline-variant/20 inner-glow-subtle z-40">
        <div className="flex items-center gap-3 px-4 py-6 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <span
              className="material-symbols-outlined text-on-primary text-[20px]"
              data-weight="fill"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
          </div>
          <div>
            <h1 className="font-headline-md text-primary text-xl font-bold leading-none tracking-tight">
              PRPilot
            </h1>
            <p className="font-label-caps text-on-surface-variant text-[10px] mt-1 uppercase tracking-wider">
              AI Automation Health
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2 px-2">
          {/* Nav Items */}
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg nav-active transition-all group scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined text-primary text-lg transition-transform group-hover:scale-110">
              dashboard
            </span>
            <span className="font-label-caps text-[13px] font-semibold tracking-wide">
              Dashboard
            </span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-bright/30 hover:text-on-surface transition-all group scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-lg">
              add_link
            </span>
            <span className="font-label-caps text-[13px] font-medium tracking-wide">
              Connect Repository
            </span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-bright/30 hover:text-on-surface transition-all group scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-lg">
              auto_awesome
            </span>
            <span className="font-label-caps text-[13px] font-medium tracking-wide">
              New Automation
            </span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-bright/30 hover:text-on-surface transition-all group scale-98-active"
            href="#"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-lg">
              description
            </span>
            <span className="font-label-caps text-[13px] font-medium tracking-wide">
              View Docs
            </span>
          </a>
        </div>
        <div className="p-4 mt-auto">
          <div className="glass-card rounded-xl p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 relative z-10">
              <img
                className="w-10 h-10 rounded-full border border-outline-variant object-cover"
                data-alt="A small, circular avatar portrait of a software engineer in a dark, high-tech environment. The lighting is dramatic, with subtle blue and purple neon accents reflecting off their face. The image is professional yet futuristic, fitting a modern developer platform. High contrast, sharp focus, 8k resolution."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8toETrDFEwD5ml9txjEupin8Io4L-HCT-hjo-vqIIJYzVT0PE8aE2FdOb3nuo_w_9UJ-IiOdhivQD5wONzunqBbTvOkrm_RHHTWAJEcRviFD4dFGnmYbJsuLWPDV8xFm2mcrqJbreQJfGF_51ivdcwcZJZFmxu2uHePtm83b1onw0D_sJ7RWvwpgzha72iKdNXdkHWiNp6-d_gFf3MGXY5RulGEcClsCsanFEALT9AyaMqaZaMA5pBfSmUp-Jr3BJ-xRD12DiLd8"
              />
              <div>
                <p className="font-body-sm font-semibold text-on-surface">
                  Alex Dev
                </p>
                <p className="font-label-caps text-[10px] text-on-surface-variant">
                  Pro Plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-64 flex flex-col h-screen relative z-10">
        {/* TopNavBar (Dashboard Specific) */}
        <header className="h-16 px-gutter flex justify-between items-center bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 sticky top-0 z-30 shadow-sm">
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-on-surface-variant hover:text-primary p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
          {/* Search */}
          <div className="flex-1 max-w-md ml-4 md:ml-0">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm transition-colors group-focus-within:text-primary">
                search
              </span>
              <input
                className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg pl-10 pr-4 py-1.5 text-sm font-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
                placeholder="Search repositories, runs, or logs..."
                type="text"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <kbd className="font-mono-code text-[10px] bg-surface-container-low border border-outline-variant/40 rounded px-1.5 py-0.5 text-on-surface-variant">
                  ⌘
                </kbd>
                <kbd className="font-mono-code text-[10px] bg-surface-container-low border border-outline-variant/40 rounded px-1.5 py-0.5 text-on-surface-variant">
                  K
                </kbd>
              </div>
            </div>
          </div>
          {/* Trailing Actions */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-bright hover:text-on-surface transition-colors relative">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(76,215,246,0.8)]" />
            </button>
            <div className="h-5 w-px bg-outline-variant/30 mx-2 hidden md:block" />
            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant/30 bg-surface-container hover:bg-surface-bright transition-colors">
              <span className="material-symbols-outlined text-[16px] text-primary">
                terminal
              </span>
              <span className="font-mono-code text-[12px] text-on-surface">
                CLI Status:
                <span className="text-secondary">Active</span>
              </span>
            </button>
          </div>
        </header>
        {/* Dashboard Canvas */}
        <main className="flex-1 overflow-y-auto p-4 md:p-lg lg:p-xl custom-scrollbar scroll-smooth">
          <div className="max-w-[1600px] mx-auto space-y-lg">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="font-headline-md text-2xl font-bold text-on-surface">
                  Overview
                </h2>
                <p className="font-body-sm text-on-surface-variant mt-1">
                  Real-time metrics for your autonomous PR agents.
                </p>
              </div>
              <div className="flex gap-2">
                <select className="bg-surface-container border border-outline-variant/40 rounded-lg px-3 py-1.5 text-sm font-body-sm text-on-surface focus:outline-none focus:border-primary">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
                <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg font-label-caps text-[12px] font-semibold hover:bg-inverse-primary transition-colors shadow-[0_0_15px_rgba(79,70,229,0.2)] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">
                    sync
                  </span>
                  Refresh
                </button>
              </div>
            </div>
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* KPI 1 */}
              <div className="glass-card rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="font-label-caps text-on-surface-variant text-[11px]">
                      PRs Processed
                    </p>
                    <h3 className="font-display-lg-mobile text-3xl mt-1 text-on-surface">
                      1,248
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded bg-surface-bright/50 border border-outline-variant/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      merge
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-[#10b981] text-[16px]">
                    trending_up
                  </span>
                  <span className="text-[#10b981] font-medium">+12.5%</span>
                  <span className="text-on-surface-variant font-body-sm text-[12px]">
                    vs last period
                  </span>
                </div>
              </div>
              {/* KPI 2 */}
              <div className="glass-card rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="font-label-caps text-on-surface-variant text-[11px]">
                      Avg. Merge Time
                    </p>
                    <h3 className="font-display-lg-mobile text-3xl mt-1 text-on-surface">
                      18
                      <span className="text-xl text-on-surface-variant">m</span>
                      42
                      <span className="text-xl text-on-surface-variant">s</span>
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded bg-surface-bright/50 border border-outline-variant/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      timer
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-[#10b981] text-[16px]">
                    trending_down
                  </span>
                  <span className="text-[#10b981] font-medium">-2m 15s</span>
                  <span className="text-on-surface-variant font-body-sm text-[12px]">
                    faster
                  </span>
                </div>
              </div>
              {/* KPI 3 */}
              <div className="glass-card rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#10b981]/10 rounded-full blur-2xl group-hover:bg-[#10b981]/20 transition-all" />
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="font-label-caps text-on-surface-variant text-[11px]">
                      Quality Pass Rate
                    </p>
                    <h3 className="font-display-lg-mobile text-3xl mt-1 text-on-surface">
                      99.8
                      <span className="text-xl text-on-surface-variant">%</span>
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded bg-surface-bright/50 border border-outline-variant/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#10b981] text-[18px]">
                      verified
                    </span>
                  </div>
                </div>
                {/* Mini Sparkline (CSS Mock) */}
                <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full"
                    style={{ width: "99.8%" }}
                  />
                </div>
              </div>
              {/* KPI 4 */}
              <div className="glass-card rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-tertiary/10 rounded-full blur-2xl group-hover:bg-tertiary/20 transition-all" />
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="font-label-caps text-on-surface-variant text-[11px]">
                      Active Agents
                    </p>
                    <h3 className="font-display-lg-mobile text-3xl mt-1 text-on-surface">
                      24
                      <span className="text-xl text-on-surface-variant">
                        /30
                      </span>
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded bg-surface-bright/50 border border-outline-variant/30 flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      smart_toy
                    </span>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#10b981] rounded-full border-2 border-surface animate-pulse" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-[10px] font-mono-code">
                      A1
                    </div>
                    <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-[10px] font-mono-code">
                      A2
                    </div>
                    <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-[10px] font-mono-code">
                      A3
                    </div>
                    <div className="w-6 h-6 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-[10px] font-mono-code">
                      +21
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Split Layout: Table & Live View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Section: Recent Automation Runs (Col-span-2) */}
              <div className="lg:col-span-2 glass-card rounded-xl border border-outline-variant/40 flex flex-col h-[500px]">
                <div className="p-5 border-b border-outline-variant/30 flex justify-between items-center">
                  <h3 className="font-headline-md text-lg text-on-surface">
                    Recent Automation Runs
                  </h3>
                  <button className="text-on-surface-variant hover:text-primary transition-colors text-sm font-label-caps flex items-center gap-1">
                    View All
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="flex-1 overflow-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-surface-container/95 backdrop-blur-md border-b border-outline-variant/30 z-10">
                      <tr>
                        <th className="py-3 px-5 font-label-caps text-on-surface-variant text-[11px] font-medium">
                          Repository / Branch
                        </th>
                        <th className="py-3 px-5 font-label-caps text-on-surface-variant text-[11px] font-medium">
                          Status
                        </th>
                        <th className="py-3 px-5 font-label-caps text-on-surface-variant text-[11px] font-medium">
                          Duration
                        </th>
                        <th className="py-3 px-5 font-label-caps text-on-surface-variant text-[11px] font-medium text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20 font-body-sm text-sm">
                      {/* Row 1: Running */}
                      <tr className="hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant/50">
                              <span className="material-symbols-outlined text-[18px] text-on-surface">
                                book
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-on-surface">
                                frontend-core
                              </p>
                              <p className="text-on-surface-variant text-xs font-mono-code mt-0.5">
                                <span className="text-primary">
                                  feat/auth-update
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-secondary/10 border border-secondary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                            <span className="font-label-caps text-[10px] text-secondary">
                              Analyzing
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-on-surface-variant font-mono-code text-xs">
                          02:14
                          <span className="animate-pulse">...</span>
                        </td>
                        <td className="py-4 px-5 text-right">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 2: Success */}
                      <tr className="hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant/50">
                              <span className="material-symbols-outlined text-[18px] text-on-surface">
                                dns
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-on-surface">
                                api-gateway
                              </p>
                              <p className="text-on-surface-variant text-xs font-mono-code mt-0.5">
                                <span className="text-outline">
                                  fix/rate-limit
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#10b981]/10 border border-[#10b981]/20">
                            <span className="material-symbols-outlined text-[#10b981] text-[12px]">
                              check_circle
                            </span>
                            <span className="font-label-caps text-[10px] text-[#10b981]">
                              Merged
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-on-surface-variant font-mono-code text-xs">
                          04:32
                        </td>
                        <td className="py-4 px-5 text-right">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 3: Failed */}
                      <tr className="hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant/50">
                              <span className="material-symbols-outlined text-[18px] text-on-surface">
                                database
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-on-surface">
                                user-service-db
                              </p>
                              <p className="text-on-surface-variant text-xs font-mono-code mt-0.5">
                                <span className="text-outline">
                                  chore/index-opt
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-error/10 border border-error/20">
                            <span className="material-symbols-outlined text-error text-[12px]">
                              error
                            </span>
                            <span className="font-label-caps text-[10px] text-error">
                              Failed (Tests)
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-on-surface-variant font-mono-code text-xs">
                          01:15
                        </td>
                        <td className="py-4 px-5 text-right">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/* Row 4: Success */}
                      <tr className="hover:bg-surface-bright/20 transition-colors group cursor-pointer">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant/50">
                              <span className="material-symbols-outlined text-[18px] text-on-surface">
                                book
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-on-surface">
                                frontend-core
                              </p>
                              <p className="text-on-surface-variant text-xs font-mono-code mt-0.5">
                                <span className="text-outline">
                                  refactor/components
                                </span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-5">
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#10b981]/10 border border-[#10b981]/20">
                            <span className="material-symbols-outlined text-[#10b981] text-[12px]">
                              check_circle
                            </span>
                            <span className="font-label-caps text-[10px] text-[#10b981]">
                              Merged
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-on-surface-variant font-mono-code text-xs">
                          08:50
                        </td>
                        <td className="py-4 px-5 text-right">
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
                            <span className="material-symbols-outlined text-[20px]">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Side Section: Live Agent Analysis (Col-span-1) */}
              <div className="lg:col-span-1 glass-card rounded-xl border border-outline-variant/40 flex flex-col h-[500px] overflow-hidden relative">
                {/* Header */}
                <div className="p-4 border-b border-outline-variant/30 bg-surface/50 backdrop-blur-md flex justify-between items-center z-20 relative">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(76,215,246,0.8)]" />
                    <h3 className="font-headline-md text-sm font-semibold text-on-surface">
                      Live Agent Analysis
                    </h3>
                  </div>
                  <span className="font-mono-code text-[10px] text-on-surface-variant border border-outline-variant/30 px-1.5 py-0.5 rounded">
                    Agent-4
                  </span>
                </div>
                {/* Diff Viewer Mock */}
                <div className="flex-1 bg-[#0d1117] overflow-hidden relative font-mono-code text-[11px] leading-relaxed flex flex-col">
                  {/* Overlay gradient to simulate depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1117] z-10 pointer-events-none" />
                  {/* Code Header */}
                  <div className="px-3 py-1.5 bg-[#161b22] border-b border-[#30363d] text-[#8b949e] flex items-center gap-2 z-0 relative">
                    <span className="material-symbols-outlined text-[14px]">
                      code
                    </span>
                    src/auth/jwt.ts
                  </div>
                  {/* Code Lines (Mock Diff) */}
                  <div className="flex-1 overflow-y-auto p-2 pb-12 z-0 relative">
                    <div className="flex hover:bg-[#161b22]/50">
                      <div className="w-8 text-right pr-2 text-[#484f58] select-none border-r border-[#30363d]">
                        42
                      </div>
                      <div className="pl-4 text-[#c9d1d9] whitespace-pre">
                        const token = sign(payload, secret, &#123;
                      </div>
                    </div>
                    {/* Removed Line */}
                    <div className="flex bg-[#ffebe9]/10 hover:bg-[#ffebe9]/20">
                      <div className="w-8 text-right pr-2 text-[#484f58] select-none border-r border-[#30363d]">
                        -
                      </div>
                      <div className="pl-4 text-[#ff7b72] whitespace-pre">
                        expiresIn: '1d'
                      </div>
                    </div>
                    {/* Added Line */}
                    <div className="flex bg-[#2ea043]/10 hover:bg-[#2ea043]/20 relative">
                      <div className="w-8 text-right pr-2 text-[#484f58] select-none border-r border-[#30363d]">
                        +
                      </div>
                      <div className="pl-4 text-[#3fb950] whitespace-pre">
                        expiresIn: config.jwtExpiration
                      </div>
                      {/* Agent Highlight Box */}
                      <div className="absolute inset-0 border border-secondary/50 bg-secondary/5 pointer-events-none animate-pulse" />
                    </div>
                    <div className="flex hover:bg-[#161b22]/50">
                      <div className="w-8 text-right pr-2 text-[#484f58] select-none border-r border-[#30363d]">
                        44
                      </div>
                      <div className="pl-4 text-[#c9d1d9] whitespace-pre">
                        &#125;);
                      </div>
                    </div>
                    <div className="flex hover:bg-[#161b22]/50">
                      <div className="w-8 text-right pr-2 text-[#484f58] select-none border-r border-[#30363d]">
                        45
                      </div>
                      <div className="pl-4 text-[#c9d1d9] whitespace-pre">
                        return token;
                      </div>
                    </div>
                  </div>
                  {/* Agent Insight Panel (Overlays bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-surface-container/90 backdrop-blur-xl border-t border-outline-variant/50 z-20 transform transition-transform">
                    <div className="flex gap-2 items-start">
                      <div className="w-6 h-6 rounded bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary text-[14px]">
                          psychology
                        </span>
                      </div>
                      <div>
                        <p className="font-body-sm text-sm text-on-surface font-medium mb-1">
                          Security Improvement
                        </p>
                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-tight">
                          Hardcoded expiration replaced with config variable.
                          Validating environment injection next...
                        </p>
                        {/* Progress Bar */}
                        <div className="mt-3 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="h-full w-2/3 bg-gradient-to-r from-secondary to-primary rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Injecting keyframes for custom animations via style tag since they aren't in config */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
            100% {
                transform: translateX(200%);
            }
        }
    `,
        }}
      />
    </div>
  );
}
