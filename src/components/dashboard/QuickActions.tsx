import React from 'react';
import { PlayCircle, GitPullRequest, Settings, Clock } from 'lucide-react';

type ActivityEvent = {
  id: string;
  message: string;
  timestamp: string;
};

const mockActivityEvents: ActivityEvent[] = [
  { id: '1', message: 'PR #29 merged successfully', timestamp: '2 minutes ago' },
  { id: '2', message: 'Run started for SCRUM-38', timestamp: '15 minutes ago' },
  { id: '3', message: 'Code review completed for FEAT-12', timestamp: '1 hour ago' },
  { id: '4', message: 'New PR opened: SCRUM-40', timestamp: '3 hours ago' },
  { id: '5', message: 'Integration test passed for PR #27', timestamp: '5 hours ago' },
];

export function QuickActions() {
  return (
    <div className="space-y-6">
      {/* Quick Actions Panel */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:from-indigo-500/20 hover:to-cyan-500/20 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
              <PlayCircle className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-white">New Run from Jira</div>
              <div className="text-xs text-slate-400">Start a new workflow run</div>
            </div>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:from-indigo-500/20 hover:to-cyan-500/20 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
              <GitPullRequest className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-white">View Open PRs</div>
              <div className="text-xs text-slate-400">Review active pull requests</div>
            </div>
          </button>

          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 hover:border-indigo-400/50 hover:from-indigo-500/20 hover:to-cyan-500/20 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-lg bg-slate-500/20 flex items-center justify-center group-hover:bg-slate-500/30 transition-colors">
              <Settings className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-semibold text-white">Open Settings</div>
              <div className="text-xs text-slate-400">Configure your workspace</div>
            </div>
          </button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Activity Feed</h3>
        <div className="space-y-3">
          {mockActivityEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start space-x-3 pb-3 border-b border-slate-800/50 last:border-b-0 last:pb-0"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-200">{event.message}</p>
                <div className="flex items-center space-x-1 mt-1 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span>{event.timestamp}</span>
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
