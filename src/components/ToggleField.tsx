import React, { useState } from "react";

interface Props {
  label: string;
}

const ToggleField: React.FC<Props> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex items-center justify-between py-4">
      <span className="text-on-surface-variant font-medium">{label}</span>
      <button
        className={`relative inline-flex items-center h-5 rounded-full w-10 transition-colors ${isActive ? "bg-primary" : "bg-gray-400"}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`absolute inline-block w-5 h-5 rounded-full transition-transform transform ${isActive ? "translate-x-5 bg-white" : "bg-white"}`}
        ></span>
      </button>
    </div>
  );
};
export default ToggleField;
