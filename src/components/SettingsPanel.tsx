import React from "react";
import ToggleField from "./ToggleField";
import SaveBar from "./SaveBar";

interface Props {}

const SettingsPanel: React.FC<Props> = () => {
  return (
    <div className="bg-surface glass-card flex-1 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-on-surface">
        Profile Settings
      </h2>
      <ToggleField label="Email Notifications" />
      <ToggleField label="SMS Notifications" />
      <SaveBar />
    </div>
  );
};
export default SettingsPanel;
