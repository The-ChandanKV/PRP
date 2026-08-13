import React from 'react';
import { Play, GitPullRequest, Settings, Check, GitMerge, Rocket } from 'lucide-react';

export function QuickActions() {
  const activityEvents = [
    { id: 1, text: 'PR #29 merged', timestamp: '2 hours ago', icon: GitMerge, color: 'text-emerald-400' },
    { id: 2, text: 'Run started for SCRUM-38', timestamp: '4 hours ago', icon: Rocket, color: 'text-indigo-400' },
    { id: 3, text: 'PR #27 approved', timestamp: '5 hours ago', icon: Check, color: 'text-cyan-400' },
    { id: 4, text: 'Run completed for SCRUM-35', timestamp: '6 hours ago', icon: Check, color: 'text-emerald-400' },
    { id: 5, text: 'PR #26 created', timestamp: '8 hours ago', icon: GitPullRequest, color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:from-indigo-500/20 hover:to-cyan-500/20 transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                <Play className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">New run from Jira</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-indigo-500/20 transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                <GitPullRequest className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">View open PRs</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gradient-to-r from-slate-500/10 to-slate-600/10 border border-slate-500/30 hover:border-slate-400/50 hover:from-slate-500/20 hover:to-slate-600/20 transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-slate-500/20 flex items-center justify-center group-hover:bg-slate-500/30 transition-colors">
                <Settings className="w-4 h-4 text-slate-400" />
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">Open Settings</span>
            </div>
          </button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Activity Feed</h3>
        <div className="space-y-3">
          {activityEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <div key={event.id} className="flex items-start space-x-3 pb-3 border-b border-slate-800/50 last:border-b-0 last:pb-0">
                <div className={`w-6 h-6 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <IconComponent className={`w-3.5 h-3.5 ${event.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-200 font-medium">{event.text}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{event.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
