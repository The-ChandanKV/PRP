import React from 'react';
import { GitPullRequest, Settings as SettingsIcon, User } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Top row: Logo, Product name, Nav, Avatar */}
        <div className="flex items-center justify-between mb-6">
          {/* Left: Logo + Product name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GitPullRequest className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">PRPilot</span>
          </div>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/dashboard"
              className="text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400 pb-1"
            >
              Dashboard
            </a>
            <a
              href="/settings"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center space-x-2"
            >
              <SettingsIcon className="w-4 h-4" />
              <span>Settings</span>
            </a>
          </nav>

          {/* Right: User avatar placeholder */}
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Bottom row: Page title + subtitle */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-slate-400">Overview of your PRPilot workflows</p>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
