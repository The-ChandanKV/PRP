import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

export type StatCardProps = {
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  icon: LucideIcon;
  className?: string;
};

export function StatCard({ label, value, trend, icon: Icon, className }: StatCardProps) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-xl p-6',
        'hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all duration-300',
        'shadow-lg hover:shadow-indigo-500/20',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
            {label}
          </p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend && (
            <div
              className={[
                'inline-flex items-center space-x-1 mt-3 text-xs font-medium',
                trend === 'up' ? 'text-emerald-400' : 'text-rose-400',
              ].join(' ')}
            >
              {trend === 'up' ? (
                <TrendingUp className="w-3.5 h-3.5" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5" />
              )}
              <span>{trend === 'up' ? 'Trending up' : 'Trending down'}</span>
            </div>
          )}
        </div>
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center">
            <Icon className="w-6 h-6 text-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
