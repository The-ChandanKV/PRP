import React from 'react';
import { PlayCircle, GitPullRequest, Settings, Clock } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      id: 1,
      title: 'New run from Jira',
      description: 'Start a new PRPilot workflow',
      icon: PlayCircle,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 2,
      title: 'View open PRs',
      description: 'See all active pull requests',
      icon: GitPullRequest,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 3,
      title: 'Open Settings',
      description: 'Configure integrations',
      icon: Settings,
      color: 'from-slate-500 to-slate-600',
    },
  ];

  const activityFeed = [
    {
      id: 1,
      message: 'PR #29 merged',
      timestamp: '5 minutes ago',
    },
    {
      id: 2,
      message: 'Run started for SCRUM-38',
      timestamp: '12 minutes ago',
    },
    {
      id: 3,
      message: 'PR #27 review completed',
      timestamp: '1 hour ago',
    },
    {
      id: 4,
      message: 'Run completed for SCRUM-35',
      timestamp: '2 hours ago',
    },
    {
      id: 5,
      message: 'New PR #30 created',
      timestamp: '3 hours ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="rounded-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className="w-full flex items-center space-x-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-200 text-left group focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} p-0.5 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <div className="w-full h-full bg-slate-900 rounded-[7px] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-white group-hover:text-indigo-300 transition-colors">
                    {action.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {action.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Activity Feed */}
      <div className="rounded-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Activity Feed</h3>
        <div className="space-y-3">
          {activityFeed.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-slate-300">{activity.message}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {activity.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
