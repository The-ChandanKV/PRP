import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentRunsTable } from '../components/dashboard/RecentRunsTable';
import { QuickActions } from '../components/dashboard/QuickActions';
import { IntegrationsHealth } from '../components/dashboard/IntegrationsHealth';
import { TrendingUp, TrendingDown, GitPullRequest, Activity, Clock, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      label: 'Open PRs',
      value: '12',
      trend: 'up',
      icon: GitPullRequest,
      iconColor: 'text-indigo-400'
    },
    {
      label: 'Runs this week',
      value: '48',
      trend: 'up',
      icon: Activity,
      iconColor: 'text-cyan-400'
    },
    {
      label: 'Avg. review time',
      value: '2.4h',
      trend: 'down',
      icon: Clock,
      iconColor: 'text-emerald-400'
    },
    {
      label: 'Success rate',
      value: '94%',
      trend: 'up',
      icon: CheckCircle2,
      iconColor: 'text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              trend={stat.trend as 'up' | 'down'}
              icon={stat.icon}
              iconColor={stat.iconColor}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Recent Runs */}
          <div className="lg:col-span-1">
            <RecentRunsTable />
          </div>

          {/* Right Column: Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>

        {/* Integrations Health Section */}
        <IntegrationsHealth />
      </main>
    </div>
  );
}

export { DashboardPage };
