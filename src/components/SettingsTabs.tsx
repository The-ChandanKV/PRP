import React, { useState } from "react";

interface Props {}

const SettingsTabs: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "notifications" | "security"
  >("profile");

  return (
    <nav className="flex flex-col gap-4">
      <button
        className={`text-lg font-medium ${activeTab === "profile" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"}`}
        onClick={() => setActiveTab("profile")}
      >
        Profile
      </button>
      <button
        className={`text-lg font-medium ${activeTab === "notifications" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"}`}
        onClick={() => setActiveTab("notifications")}
      >
        Notifications
      </button>
      <button
        className={`text-lg font-medium ${activeTab === "security" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"}`}
        onClick={() => setActiveTab("security")}
      >
        Security
      </button>
    </nav>
  );
};
export default SettingsTabs;
