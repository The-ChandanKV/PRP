import React from 'react';
import { Clock, GitPullRequest, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

type RunStatus = 'completed' | 'running' | 'failed' | 'queued';

interface RunRow {
  id: string;
  ticket: string;
  status: RunStatus;
  provider: string;
  updated: string;
}

const mockRuns: RunRow[] = [
  { id: 'RUN-1847', ticket: 'SCRUM-42', status: 'completed', provider: 'GitHub', updated: '2 min ago' },
  { id: 'RUN-1846', ticket: 'SCRUM-41', status: 'running', provider: 'Jira', updated: '5 min ago' },
  { id: 'RUN-1845', ticket: 'SCRUM-40', status: 'failed', provider: 'GitHub', updated: '12 min ago' },
  { id: 'RUN-1844', ticket: 'SCRUM-39', status: 'queued', provider: 'Stitch', updated: '18 min ago' },
  { id: 'RUN-1843', ticket: 'SCRUM-38', status: 'completed', provider: 'GitHub', updated: '1 hour ago' },
  { id: 'RUN-1842', ticket: 'SCRUM-37', status: 'completed', provider: 'MCP', updated: '3 hours ago' },
];

const getStatusConfig = (status: RunStatus) => {
  switch (status) {
    case 'completed':
      return {
        icon: CheckCircle2,
        className: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        label: 'Completed',
      };
    case 'running':
      return {
        icon: Loader2,
        className: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        label: 'Running',
      };
    case 'failed':
      return {
        icon: AlertCircle,
        className: 'bg-red-500/10 text-red-400 border-red-500/30',
        label: 'Failed',
      };
    case 'queued':
      return {
        icon: Clock,
        className: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
        label: 'Queued',
      };
  }
};

export function RecentRunsTable() {
  const handleRowClick = (runId: string) => {
    console.log('Row clicked (UI-only):', runId);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Recent Runs</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-800/60 bg-slate-900/60">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-800">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium text-slate-400">Run ID</th>
              <th className="px-4 py-3 font-medium text-slate-400">Ticket</th>
              <th className="px-4 py-3 font-medium text-slate-400">Status</th>
              <th className="px-4 py-3 font-medium text-slate-400">Provider</th>
              <th className="px-4 py-3 font-medium text-slate-400">Updated</th>
            </tr>
          </thead>
          <tbody>
            {mockRuns.map((run) => {
              const statusConfig = getStatusConfig(run.status);
              const StatusIcon = statusConfig.icon;
              return (
                <tr
                  key={run.id}
                  onClick={() => handleRowClick(run.id)}
                  className="border-b border-slate-800/40 hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3">
                    <span className="font-mono text-indigo-400">{run.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <GitPullRequest className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-300">{run.ticket}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusConfig.className}`}
                    >
                      <StatusIcon className={`w-3 h-3 ${run.status === 'running' ? 'animate-spin' : ''}`} />
                      <span>{statusConfig.label}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{run.provider}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{run.updated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentRunsTable;
