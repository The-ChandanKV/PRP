import React from 'react';
import { GitPullRequest, Settings, LayoutDashboard, User } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo + Product Name + Nav Links + User Avatar */}
        <div className="flex items-center justify-between mb-4">
          {/* Left: Logo + Product Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GitPullRequest className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">PRPilot</span>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/dashboard"
              className="flex items-center space-x-2 text-sm font-medium text-indigo-400 border-b-2 border-indigo-400 pb-1"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </a>
            <a
              href="/settings"
              className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-white transition-colors pb-1"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </a>
          </nav>

          {/* Right: User Avatar Placeholder */}
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700/80 flex items-center justify-center hover:border-indigo-500/50 transition-colors cursor-pointer">
              <User className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Bottom Row: Page Title + Subtitle */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-sm text-slate-400">Overview of your PRPilot workflows</p>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
