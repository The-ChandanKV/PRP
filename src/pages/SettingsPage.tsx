import React from "react";
import PageHeader from "../components/PageHeader";
import SettingsTabs from "../components/SettingsTabs";
import SettingsPanel from "../components/SettingsPanel";

const SettingsPage: React.FC = () => {
  return (
    <div className="bg-background text-on-surface font-body-base min-h-screen relative">
      <PageHeader />
      <div className="flex max-w-[1440px] mx-auto p-6">
        <SettingsTabs />
        <SettingsPanel />
      </div>
    </div>
  );
};
export default SettingsPage;
