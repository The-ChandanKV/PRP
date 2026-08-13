import React from 'react';
import { CheckCircle2, AlertCircle, Github, Workflow } from 'lucide-react';

type IntegrationStatus = {
  name: string;
  status: 'connected' | 'warning';
  statusText: string;
  icon: React.ReactNode;
};

const integrations: IntegrationStatus[] = [
  {
    name: 'GitHub',
    status: 'connected',
    statusText: 'Connected',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'Jira',
    status: 'connected',
    statusText: 'Connected',
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    name: 'Stitch',
    status: 'warning',
    statusText: 'Needs attention',
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    name: 'MCP',
    status: 'connected',
    statusText: 'Connected',
    icon: <Workflow className="w-5 h-5" />,
  },
];

export function IntegrationsHealth() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-100">Integrations Health</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-xl p-4 hover:border-slate-700/80 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-slate-400">{integration.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {integration.statusText}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                {integration.status === 'connected' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
