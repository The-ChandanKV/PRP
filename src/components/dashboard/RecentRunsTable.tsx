import React from 'react';
import { Activity, CheckCircle2, XCircle, Clock, Loader2 } from 'lucide-react';

interface RunRow {
  id: string;
  ticket: string;
  status: 'completed' | 'running' | 'failed' | 'queued';
  provider: string;
  updated: string;
}

const mockRuns: RunRow[] = [
  {
    id: 'RUN-1847',
    ticket: 'SCRUM-42',
    status: 'completed',
    provider: 'GitHub',
    updated: '2 minutes ago'
  },
  {
    id: 'RUN-1846',
    ticket: 'SCRUM-41',
    status: 'running',
    provider: 'Jira',
    updated: '5 minutes ago'
  },
  {
    id: 'RUN-1845',
    ticket: 'SCRUM-40',
    status: 'failed',
    provider: 'GitHub',
    updated: '12 minutes ago'
  },
  {
    id: 'RUN-1844',
    ticket: 'SCRUM-38',
    status: 'queued',
    provider: 'Stitch',
    updated: '15 minutes ago'
  },
  {
    id: 'RUN-1843',
    ticket: 'SCRUM-37',
    status: 'completed',
    provider: 'GitHub',
    updated: '1 hour ago'
  },
  {
    id: 'RUN-1842',
    ticket: 'SCRUM-35',
    status: 'running',
    provider: 'Jira',
    updated: '2 hours ago'
  }
];

const getStatusConfig = (status: RunRow['status']) => {
  switch (status) {
    case 'completed':
      return {
        icon: CheckCircle2,
        text: 'Completed',
        bgColor: 'bg-emerald-500/10',
        textColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/30'
      };
    case 'running':
      return {
        icon: Loader2,
        text: 'Running',
        bgColor: 'bg-cyan-500/10',
        textColor: 'text-cyan-400',
        borderColor: 'border-cyan-500/30'
      };
    case 'failed':
      return {
        icon: XCircle,
        text: 'Failed',
        bgColor: 'bg-red-500/10',
        textColor: 'text-red-400',
        borderColor: 'border-red-500/30'
      };
    case 'queued':
      return {
        icon: Clock,
        text: 'Queued',
        bgColor: 'bg-slate-500/10',
        textColor: 'text-slate-400',
        borderColor: 'border-slate-500/30'
      };
  }
};

export function RecentRunsTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Activity className="w-5 h-5 text-indigo-400" />
        <h3 className="text-lg font-semibold text-white">Recent Runs</h3>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60">
        <table className="w-full">
          <thead className="bg-slate-800/60 border-b border-slate-700/60">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Run ID</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Ticket</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Provider</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {mockRuns.map((run) => {
              const statusConfig = getStatusConfig(run.status);
              const StatusIcon = statusConfig.icon;
              return (
                <tr
                  key={run.id}
                  className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3 text-sm font-mono text-indigo-300">{run.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-200">{run.ticket}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}>
                      <StatusIcon className={`w-3.5 h-3.5 ${run.status === 'running' ? 'animate-spin' : ''}`} />
                      <span>{statusConfig.text}</span>
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

      {/* Mobile List */}
      <div className="md:hidden space-y-3">
        {mockRuns.map((run) => {
          const statusConfig = getStatusConfig(run.status);
          const StatusIcon = statusConfig.icon;
          return (
            <div
              key={run.id}
              className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/40 transition-colors cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-indigo-300">{run.id}</span>
                <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}>
                  <StatusIcon className={`w-3.5 h-3.5 ${run.status === 'running' ? 'animate-spin' : ''}`} />
                  <span>{statusConfig.text}</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Ticket:</span>
                <span className="font-medium text-slate-200">{run.ticket}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Provider:</span>
                <span className="text-slate-200">{run.provider}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Updated:</span>
                <span className="text-slate-400">{run.updated}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentRunsTable;
