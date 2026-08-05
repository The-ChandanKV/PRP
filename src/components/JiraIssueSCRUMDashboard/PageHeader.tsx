import React from "react";

export type PageHeaderProps = {
  title?: string;
  className?: string;
};

export function PageHeader({ title, className }: PageHeaderProps) {
  return (
    <div
      className={["rounded-lg border border-border bg-card p-4", className]
        .filter(Boolean)
        .join(" ")}
    >
      {title ? (
        <h2 className="text-lg font-medium text-foreground">{title}</h2>
      ) : null}
    </div>
  );
}
