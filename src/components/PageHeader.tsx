import React from "react";

const PageHeader: React.FC = () => {
  return (
    <header className="bg-surface/60 backdrop-blur-md border-b border-outline-variant shadow-sm docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-lg py-md max-w-[1440px] mx-auto">
      <div className="flex items-center gap-md">
        <span className="text-xl font-bold text-on-surface tracking-tight flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>
          PRPilot
        </span>
        <nav className="hidden md:flex gap-md ml-xl">
          <a
            className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors px-sm py-xs rounded-lg text-sm nav-link"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors px-sm py-xs rounded-lg text-sm nav-link"
            href="#"
          >
            Pull Requests
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors px-sm py-xs rounded-lg text-sm nav-link"
            href="#"
          >
            Automations
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors px-sm py-xs rounded-lg text-sm nav-link"
            href="#"
          >
            Analytics
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-md">
        <button className="p-xs text-on-surface-variant hover:text-on-surface rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-xs text-primary border-b-2 border-primary pb-1 transition-colors scale-95 duration-100">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <img
          alt="User profile"
          className="w-8 h-8 rounded-full border border-outline-variant object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9aNF5bX6b5fuzCT7HFTGWUnnDBgnCq8eJqrHkav8MTg_-SAZcnypWu3EDdxiQZ357XMaW-JmcXwtjKzJBE8FgkeBs3I6-PGH7Tw868v9xhIhaTrA8P7_YODlr1MhJp9SIobkvbrTKy1hkuQ4PATGd_tygo-8tUPeLl-ay7vOz29REFM8hdSb3W2NOfWQ3ws01DqE86sDyAf8Zt_AgR3atoL2y9AY5gCDIn4q4U6bWvV4rs_oYm6WdTdHKonoMvReW-El_CYRY1Nw"
        />
      </div>
    </header>
  );
};

export default PageHeader;
