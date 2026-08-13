import React from 'react';
import { Play, GitPullRequest, Settings, CheckCircle2, Workflow, GitMerge } from 'lucide-react';

export function QuickActions() {
  const mockActivityFeed = [
    { id: 1, event: 'PR #29 merged', timestamp: '2 hours ago', icon: GitMerge },
    { id: 2, event: 'Run started for SCRUM-38', timestamp: '4 hours ago', icon: Play },
    { id: 3, event: 'PR #27 opened', timestamp: '6 hours ago', icon: GitPullRequest },
    { id: 4, event: 'Review completed for SCRUM-35', timestamp: '8 hours ago', icon: CheckCircle2 },
    { id: 5, event: 'Workflow triggered', timestamp: '12 hours ago', icon: Workflow },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions Buttons */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
              <Play className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-white">New run from Jira</div>
              <div className="text-xs text-slate-400">Start a workflow from a ticket</div>
            </div>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
              <GitPullRequest className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-white">View open PRs</div>
              <div className="text-xs text-slate-400">Browse all active pull requests</div>
            </div>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:bg-indigo-500/20 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-600/50 transition-colors">
              <Settings className="w-5 h-5 text-slate-300" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-white">Open Settings</div>
              <div className="text-xs text-slate-400">Configure integrations</div>
            </div>
          </button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Activity Feed</h3>
        <div className="space-y-3">
          {mockActivityFeed.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/60 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-200 truncate">{item.event}</div>
                  <div className="text-xs text-slate-500">{item.timestamp}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
