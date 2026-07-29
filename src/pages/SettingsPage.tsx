import React from "react";
import MainContent from "../components/MainContent";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <div className="flex max-w-[1440px] mx-auto w-full flex-1">
        <main className="flex-1 py-xl px-lg lg:px-2xl w-full min-w-0">
          <div className="max-w-3xl mx-auto space-y-[48px]">
          <MainContent />
          </div>
        </main>
      </div>
    </div>
  );
}
