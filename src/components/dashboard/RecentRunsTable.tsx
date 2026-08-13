import React from 'react';
import { PlayCircle, CheckCircle2, XCircle, Clock } from 'lucide-react';

type RunStatus = 'completed' | 'running' | 'failed' | 'queued';

interface Run {
  id: string;
  ticket: string;
  status: RunStatus;
  provider: string;
  updated: string;
}

const mockRuns: Run[] = [
  {
    id: 'RUN-1234',
    ticket: 'SCRUM-42',
    status: 'completed',
    provider: 'GitHub',
    updated: '2 min ago',
  },
  {
    id: 'RUN-1233',
    ticket: 'SCRUM-41',
    status: 'running',
    provider: 'Jira',
    updated: '5 min ago',
  },
  {
    id: 'RUN-1232',
    ticket: 'SCRUM-40',
    status: 'failed',
    provider: 'GitHub',
    updated: '12 min ago',
  },
  {
    id: 'RUN-1231',
    ticket: 'SCRUM-39',
    status: 'queued',
    provider: 'Stitch',
    updated: '18 min ago',
  },
  {
    id: 'RUN-1230',
    ticket: 'SCRUM-38',
    status: 'completed',
    provider: 'GitHub',
    updated: '1 hour ago',
  },
  {
    id: 'RUN-1229',
    ticket: 'SCRUM-37',
    status: 'completed',
    provider: 'Jira',
    updated: '3 hours ago',
  },
];

const statusConfig: Record<RunStatus, { icon: React.ElementType; color: string; label: string }> = {
  completed: {
    icon: CheckCircle2,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    label: 'Completed',
  },
  running: {
    icon: PlayCircle,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    label: 'Running',
  },
  failed: {
    icon: XCircle,
    color: 'text-red-400 bg-red-500/10 border-red-500/30',
    label: 'Failed',
  },
  queued: {
    icon: Clock,
    color: 'text-slate-400 bg-slate-500/10 border-slate-500/30',
    label: 'Queued',
  },
};

export function RecentRunsTable() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Recent Runs</h3>
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left text-xs font-semibold text-slate-400 px-4 py-3">Run ID</th>
                <th className="text-left text-xs font-semibold text-slate-400 px-4 py-3">Ticket</th>
                <th className="text-left text-xs font-semibold text-slate-400 px-4 py-3">Status</th>
                <th className="text-left text-xs font-semibold text-slate-400 px-4 py-3">Provider</th>
                <th className="text-left text-xs font-semibold text-slate-400 px-4 py-3">Updated</th>
              </tr>
            </thead>
            <tbody>
              {mockRuns.map((run) => {
                const StatusIcon = statusConfig[run.status].icon;
                return (
                  <tr
                    key={run.id}
                    className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-3 text-sm font-mono text-indigo-300">{run.id}</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-200">{run.ticket}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md border text-xs font-medium ${
                          statusConfig[run.status].color
                        }`}
                      >
                        <StatusIcon className="w-3.5 h-3.5" />
                        <span>{statusConfig[run.status].label}</span>
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">{run.provider}</td>
                    <td className="px-4 py-3 text-sm text-slate-400">{run.updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-slate-800/50">
          {mockRuns.map((run) => {
            const StatusIcon = statusConfig[run.status].icon;
            return (
              <div
                key={run.id}
                className="p-4 hover:bg-slate-800/40 transition-colors cursor-pointer space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-mono text-indigo-300">{run.id}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{run.ticket}</div>
                  </div>
                  <span
                    className={`inline-flex items-center space-x-1 px-2 py-1 rounded-md border text-xs font-medium ${
                      statusConfig[run.status].color
                    }`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    <span>{statusConfig[run.status].label}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{run.provider}</span>
                  <span className="text-slate-400">{run.updated}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
