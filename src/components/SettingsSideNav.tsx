import React from "react";

export default function SettingsSideNav() {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 reveal">
      <div className="glass-panel rounded-xl p-xs flex lg:flex-col gap-xs overflow-x-auto lg:overflow-visible no-scrollbar sticky top-24">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-variant/50 text-secondary border-l-2 border-secondary font-label-md text-label-md whitespace-nowrap w-full text-left transition-colors">
          <span className="material-symbols-outlined">person</span>
          Profile
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/30 font-label-md text-label-md whitespace-nowrap w-full text-left transition-colors">
          <span className="material-symbols-outlined">
            notifications_active
          </span>
          Notifications
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/30 font-label-md text-label-md whitespace-nowrap w-full text-left transition-colors">
          <span className="material-symbols-outlined">security</span>
          Security
        </button>
      </div>
    </aside>
  );
}
