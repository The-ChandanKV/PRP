import React from "react";

export default function PageHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 text-primary dark:text-primary-fixed backdrop-blur-xl border-b border-white/10 shadow-sm flex items-center justify-between px-6 h-16 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-3xl">terminal</span>
        <div className="font-headline-lg text-headline-lg font-bold text-primary dark:text-primary tracking-tighter">
          PRPilot
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {/* Search placeholder if needed */}
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50">
            search
          </span>
          <input
            className="input-glass pl-10 pr-4 py-1.5 rounded-full text-body-sm font-code-md text-code-md w-64 group-hover:w-72 transition-all duration-300"
            placeholder="Search..."
            type="text"
          />
        </div>
        <button className="text-on-surface-variant hover:bg-white/5 transition-colors p-2 rounded-full relative">
          <span className="material-symbols-outlined" data-icon="notifications">
            notifications
          </span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        <button className="text-on-surface-variant hover:bg-white/5 transition-colors p-2 rounded-full">
          <span className="material-symbols-outlined" data-icon="help_outline">
            help_outline
          </span>
        </button>
        <div className="h-6 w-px bg-white/10 mx-2"></div>
        <button className="text-on-surface hover:text-white transition-colors text-body-sm font-body-sm">
          Support
        </button>
        <button className="btn-primary text-white px-4 py-1.5 rounded-full text-body-sm font-body-sm font-semibold">
          Upgrade Plan
        </button>
        <img
          alt="User Avatar"
          className="w-8 h-8 rounded-full border border-white/20 ml-2"
          data-alt="A small, circular avatar image showing a professional developer in a dark, high-contrast studio setting, moody lighting with cyan and indigo accents."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyvHUzVgnk0I43cDcsifaX0eWwf7hR6FeOFDDJr1vRh5OEpBi_lFio86XTwNoVV5BWu4kafRn13Pv_AyY_Dh7Fl41A9XstgseBdEv4ptW-Al7WlT1H5UXZSFVC-kpvf8oXwmHqKIht7ZUC034HITBDOuyStgpKiX_THGchrjhfKTDj0s70Ab5nVykLqUguu1UZPZK-VD_-N5HLDu8zHjmhI7hwxXLY2O5mijRZrvJ0oCbNnwongDf9cExIH6bdiyf5bAtFsZlYyeQ"
        />
      </div>
    </header>
  );
}
