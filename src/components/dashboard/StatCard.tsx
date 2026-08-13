import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

export interface StatCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  icon: LucideIcon;
}

export function StatCard({ label, value, trend, icon: Icon }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 pointer-events-none" />
      
      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {label}
          </p>
          <p className="text-3xl font-bold text-white">
            {value}
          </p>
          {trend && (
            <div className={`inline-flex items-center space-x-1 text-xs font-medium ${
              trend === 'up' ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {trend === 'up' ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
              <span>{trend === 'up' ? 'Up' : 'Down'}</span>
            </div>
          )}
        </div>
        
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
      </div>
    </div>
  );
}
