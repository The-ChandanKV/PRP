import React from "react";
import PageHeader from "../components/PageHeader";
import MainContent from "../components/MainContent";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md overflow-hidden">
      <PageHeader />
      <div className="flex max-w-[1440px] mx-auto w-full flex-1">
        <main className="flex-1 md:ml-64 relative overflow-y-auto overflow-x-hidden">
          <div className="max-w-3xl mx-auto space-y-[48px]">
            <MainContent />
          </div>
        </main>
      </div>
    </div>
  );
}
