import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentRunsTable } from '../components/dashboard/RecentRunsTable';
import { QuickActions } from '../components/dashboard/QuickActions';
import { IntegrationsHealth } from '../components/dashboard/IntegrationsHealth';
import { TrendingUp, TrendingDown, GitPullRequest, Activity, Clock, CheckCircle2 } from 'lucide-react';

export function DashboardPage() {
  const kpiStats = [
    {
      label: 'Open PRs',
      value: '12',
      trend: 'up',
      icon: GitPullRequest,
    },
    {
      label: 'Runs this week',
      value: '48',
      trend: 'up',
      icon: Activity,
    },
    {
      label: 'Avg. review time',
      value: '2.4h',
      trend: 'down',
      icon: Clock,
    },
    {
      label: 'Success rate',
      value: '94%',
      trend: 'up',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiStats.map((stat, index) => (
            <StatCard
              key={index}
              label={stat.label}
              value={stat.value}
              trend={stat.trend}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Recent Runs */}
          <div className="lg:col-span-1">
            <RecentRunsTable />
          </div>

          {/* Right Column - Quick Actions */}
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
