import React from "react";

export default function PageHeader() {
  return (
    <header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/20 shadow-sm transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center h-16 px-md lg:px-lg max-w-container-max mx-auto">
        <div className="flex items-center gap-md">
          <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-xs">
            <span className="material-symbols-outlined">rocket_launch</span>
            PRPilot
          </div>
          <nav className="hidden md:flex gap-sm ml-lg">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-body-lg text-body-lg hover:bg-white/5 px-3 py-2 rounded-md"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-body-lg text-body-lg hover:bg-white/5 px-3 py-2 rounded-md"
              href="#"
            >
              Pull Requests
            </a>
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 font-body-lg text-body-lg hover:bg-white/5 px-3 py-2"
              href="#"
            >
              Settings
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-sm">
          <button className="text-on-surface-variant hover:text-primary p-2 hover:bg-white/5 rounded-full transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary p-2 hover:bg-white/5 rounded-full transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
          <img
            alt="User profile"
            className="w-8 h-8 rounded-full border border-outline-variant/50 ml-2 object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLsYavqyHdGEEP76EqKQOCYmMs1ocV1517Vt-AnCWowsmy_gUsGqw9AGWMzk6IdPRBeOW2LzN3ty7JPaXTopRyZLCeX-gjLUXpYpUJK5C-zsxy8BEcoX8GuQrTLoSvG_5lPHc-pNTkq2FUAh9xs4Z0-dTqmTH376rrNoXRY948LLPySiyHZSAyC0Qz4MHN0vnhRHEBtr8YaznQZbmkZfD29KTP45B0I3KI4_seOJWSQ5EiPoeKEBavOH6k0"
          />
        </div>
      </div>
    </header>
  );
}
