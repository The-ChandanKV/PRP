import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<string>("profile");

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#060911] text-slate-100 overflow-hidden">
      <PageHeader />
      <div className="flex flex-1 w-full relative">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  );
}
