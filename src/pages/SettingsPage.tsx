import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import SettingsTabs from "../components/SettingsTabs";
import ProfileInformation from "../components/ProfileInformation";
import Notifications from "../components/Notifications";
import Security from "../components/Security";
import Footer from "../components/Footer";

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "notifications" | "security"
  >("profile");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInformation />;
      case "notifications":
        return <Notifications />;
      case "security":
        return <Security />;
      default:
        return <ProfileInformation />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <PageHeader />
      <div className="flex max-w-[1440px] mx-auto">
        <aside className="w-64 shrink-0 hidden md:flex flex-col h-[calc(100vh-73px)] sticky top-[73px] py-xl px-md border-r border-outline-variant">
          <div className="mb-lg px-sm">
            <h1 className="text-display-lg font-display-lg text-on-surface">
              Settings
            </h1>
            <p className="text-sm text-on-surface-variant mt-2">
              Manage your account and preferences.
            </p>
          </div>
          <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>
        <main className="flex-1 py-xl px-lg lg:px-2xl w-full min-w-0">
          <div className="max-w-3xl mx-auto space-y-[48px]">
            {renderActiveTab()}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;
