import React from "react";

export type PageHeaderProps = {
  title?: string;
  className?: string;
  showLogout?: boolean;
  onLogout?: () => void;
};

export function PageHeader({ title, className, showLogout, onLogout }: PageHeaderProps) {
  return (
    <div
      className={[
        "rounded-lg border border-border bg-card p-4 flex items-center justify-between",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {title ? (
        <h2 className="text-lg font-medium text-foreground">{title}</h2>
      ) : null}
      {showLogout && onLogout ? (
        <button
          onClick={onLogout}
          className="ml-4 px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Log out
        </button>
      ) : null}
    </div>
  );
}