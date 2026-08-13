import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentRunsTable } from '../components/dashboard/RecentRunsTable';
import { QuickActions } from '../components/dashboard/QuickActions';
import { IntegrationsHealth } from '../components/dashboard/IntegrationsHealth';
import { GitPullRequest, Activity, Clock, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            label="Open PRs" 
            value="12" 
            trend="up" 
            icon={GitPullRequest}
          />
          <StatCard 
            label="Runs this week" 
            value="48" 
            trend="up" 
            icon={Activity}
          />
          <StatCard 
            label="Avg. review time" 
            value="2.4h" 
            trend="down" 
            icon={Clock}
          />
          <StatCard 
            label="Success rate" 
            value="94%" 
            trend="up" 
            icon={TrendingUp}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Recent Runs */}
          <RecentRunsTable />
          
          {/* Right Column - Quick Actions & Activity Feed */}
          <QuickActions />
        </div>

        {/* Integrations Health Section */}
        <IntegrationsHealth />
      </main>
    </div>
  );
}
