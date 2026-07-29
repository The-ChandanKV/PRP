import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import SettingsTabs from "../components/SettingsTabs";
import SettingsPanel from "../components/SettingsPanel";

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="container mx-auto p-4 hover:scale-100 transform transition-all duration-200 ease-in-out">
      <PageHeader title="Settings" />
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SettingsPanel activeTab={activeTab} />
    </div>
  );
};

export default SettingsPage;
