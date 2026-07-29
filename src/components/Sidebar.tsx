import React from "react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#090d16] border-r border-white/10 flex flex-col justify-between p-6 z-40">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Settings</h2>
          <p className="text-xs text-slate-400 mt-0.5">User Preferences</p>
        </div>

        <button className="w-full btn-primary text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25 transition-all">
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>

        <nav className="space-y-1">
          <button
            onClick={() => onTabChange("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "profile"
                ? "bg-cyan-950/40 text-cyan-300 border-l-2 border-cyan-400 shadow-inner"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-lg">person</span>
            Profile
          </button>

          <button
            onClick={() => onTabChange("notifications")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "notifications"
                ? "bg-cyan-950/40 text-cyan-300 border-l-2 border-cyan-400 shadow-inner"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-lg">notifications</span>
            Notifications
          </button>

          <button
            onClick={() => onTabChange("security")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "security"
                ? "bg-cyan-950/40 text-cyan-300 border-l-2 border-cyan-400 shadow-inner"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-lg">shield</span>
            Security
          </button>
        </nav>
      </div>

      <div className="pt-6 border-t border-white/10 space-y-1">
        <a
          href="#docs"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all"
        >
          <span className="material-symbols-outlined text-lg">menu_book</span>
          Docs
        </a>
        <button
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-amber-500/80 hover:text-amber-400 hover:bg-white/5 transition-all"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
