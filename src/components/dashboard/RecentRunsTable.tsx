import React from 'react';
import { Clock, CheckCircle2, Loader2, XCircle, AlertCircle } from 'lucide-react';

type RunStatus = 'completed' | 'running' | 'failed' | 'queued';

interface RunData {
  id: string;
  ticket: string;
  status: RunStatus;
  provider: string;
  updated: string;
}

const mockRuns: RunData[] = [
  { id: 'run-1234', ticket: 'SCRUM-42', status: 'completed', provider: 'GitHub', updated: '2 mins ago' },
  { id: 'run-1235', ticket: 'SCRUM-38', status: 'running', provider: 'Jira', updated: '5 mins ago' },
  { id: 'run-1236', ticket: 'SCRUM-40', status: 'failed', provider: 'GitHub', updated: '12 mins ago' },
  { id: 'run-1237', ticket: 'SCRUM-35', status: 'queued', provider: 'Stitch', updated: '18 mins ago' },
  { id: 'run-1238', ticket: 'SCRUM-41', status: 'completed', provider: 'GitHub', updated: '25 mins ago' },
  { id: 'run-1239', ticket: 'SCRUM-39', status: 'running', provider: 'MCP', updated: '32 mins ago' },
];

const statusConfig: Record<RunStatus, { label: string; className: string; icon: React.ReactNode }> = {
  completed: {
    label: 'Completed',
    className: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    icon: <CheckCircle2 className="w-3 h-3" />
  },
  running: {
    label: 'Running',
    className: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    icon: <Loader2 className="w-3 h-3 animate-spin" />
  },
  failed: {
    label: 'Failed',
    className: 'bg-red-500/10 border-red-500/30 text-red-400',
    icon: <XCircle className="w-3 h-3" />
  },
  queued: {
    label: 'Queued',
    className: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
    icon: <Clock className="w-3 h-3" />
  }
};

export function RecentRunsTable() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Runs</h3>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800/60">
              <th className="text-left text-xs font-medium text-slate-400 pb-3 px-2">Run ID</th>
              <th className="text-left text-xs font-medium text-slate-400 pb-3 px-2">Ticket</th>
              <th className="text-left text-xs font-medium text-slate-400 pb-3 px-2">Status</th>
              <th className="text-left text-xs font-medium text-slate-400 pb-3 px-2">Provider</th>
              <th className="text-left text-xs font-medium text-slate-400 pb-3 px-2">Updated</th>
            </tr>
          </thead>
          <tbody>
            {mockRuns.map((run) => {
              const statusInfo = statusConfig[run.status];
              return (
                <tr 
                  key={run.id}
                  className="border-b border-slate-800/40 last:border-0 hover:bg-slate-800/30 transition-colors cursor-default"
                >
                  <td className="py-3 px-2">
                    <span className="text-sm font-mono text-slate-300">{run.id}</span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-sm font-medium text-white">{run.ticket}</span>
                  </td>
                  <td className="py-3 px-2">
                    <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusInfo.className}`}>
                      {statusInfo.icon}
                      <span>{statusInfo.label}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-sm text-slate-400">{run.provider}</span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-sm text-slate-500">{run.updated}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {mockRuns.map((run) => {
          const statusInfo = statusConfig[run.status];
          return (
            <div 
              key={run.id}
              className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm font-medium text-white mb-1">{run.ticket}</div>
                  <div className="text-xs font-mono text-slate-400">{run.id}</div>
                </div>
                <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusInfo.className}`}>
                  {statusInfo.icon}
                  <span>{statusInfo.label}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 mt-3">
                <span>{run.provider}</span>
                <span>{run.updated}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
