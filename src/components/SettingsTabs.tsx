import React from "react";

const SettingsTabs: React.FC = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto">
      {/* Settings SideNav */}
      <aside className="w-64 shrink-0 hidden md:flex flex-col h-[calc(100vh-73px)] sticky top-[73px] py-xl px-md border-r border-outline-variant">
        <div className="mb-lg px-sm">
          <h1 className="text-display-lg font-display-lg text-on-surface">
            Settings
          </h1>
          <p className="text-sm text-on-surface-variant mt-2">
            Manage your account and preferences.
          </p>
        </div>
        <nav className="flex flex-col gap-2 flex-1 mt-md">
          <a
            className="side-nav-link active rounded-r-lg px-md py-sm flex items-center gap-md"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
          <a
            className="side-nav-link text-on-surface-variant rounded-r-lg px-md py-sm flex items-center gap-md"
            href="#"
          >
            <span className="material-symbols-outlined">notifications</span>
            Notifications
          </a>
          <a
            className="side-nav-link text-on-surface-variant rounded-r-lg px-md py-sm flex items-center gap-md"
            href="#"
          >
            <span className="material-symbols-outlined">security</span>
            Security
          </a>
          <a
            className="side-nav-link text-on-surface-variant rounded-r-lg px-md py-sm flex items-center gap-md"
            href="#"
          >
            <span className="material-symbols-outlined">key</span>
            API Keys
          </a>
          <a
            className="side-nav-link text-on-surface-variant rounded-r-lg px-md py-sm flex items-center gap-md"
            href="#"
          >
            <span className="material-symbols-outlined">credit_card</span>
            Billing
          </a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 py-xl px-lg lg:px-2xl w-full min-w-0">
        <div className="max-w-3xl mx-auto space-y-[48px]">
          {/* Profile Information Section and other sections can be added here */}
        </div>
      </main>
    </div>
  );
};

export default SettingsTabs;
