import React from "react";
import { LucideIcon, Settings } from "lucide-react";

interface Props {}

const PageHeader: React.FC<Props> = () => {
  return (
    <header className="bg-surface backdrop-blur-md border-b border-outline-variant shadow-sm docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-lg py-md">
      <div className="flex items-center gap-md">
        <span className="text-xl font-bold text-on-surface tracking-tight flex items-center gap-sm">
          <Settings className="text-primary" />
          PRPilot
        </span>
      </div>
    </header>
  );
};
export default PageHeader;
