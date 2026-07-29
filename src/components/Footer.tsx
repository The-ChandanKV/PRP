import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background w-full py-md border-t border-outline-variant/10 transition-opacity duration-150 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-container-max mx-auto gap-4">
        <div className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">
            rocket_launch
          </span>
          © 2024 PRPilot AI
        </div>
        <nav className="flex gap-4 font-label-sm text-label-sm">
          <a
            className="text-on-surface-variant hover:text-on-surface hover:underline transition-colors"
            href="#"
          >
            System Status
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:underline transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:underline transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:underline transition-colors"
            href="#"
          >
            Security
          </a>
        </nav>
      </div>
    </footer>
  );
}
