import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | null;
  icon?: LucideIcon | React.ComponentType<{ className?: string }> | React.ReactNode | any;
}

export function StatCard({ label, value, trend, icon: Icon }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-xl p-6 shadow-lg hover:border-indigo-500/30 transition-all duration-300">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
      
      <div className="relative space-y-3">
        {/* Icon and Trend Row */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            {typeof Icon === 'function' ? <Icon className="w-5 h-5 text-indigo-400" /> : Icon}
          </div>
          {trend && (
            <div className={`flex items-center space-x-1 text-xs font-medium ${
              trend === 'up' ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {trend === 'up' ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
            </div>
          )}
        </div>

        {/* Value */}
        <div className="text-3xl font-bold text-white tracking-tight">
          {value}
        </div>

        {/* Label */}
        <div className="text-sm font-medium text-slate-400">
          {label}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
