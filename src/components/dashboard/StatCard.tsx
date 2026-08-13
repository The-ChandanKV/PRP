import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  icon: LucideIcon;
  trendValue?: string;
}

export function StatCard({ label, value, trend, icon: Icon, trendValue }: StatCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          {trend && trendValue && (
            <div className={`flex items-center space-x-1 text-xs font-medium ${
              trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              <span>{trend === 'up' ? '↑' : '↓'}</span>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-slate-400 font-medium">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
