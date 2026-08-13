import React from 'react';
import { CheckCircle2, AlertCircle, Github, Grid3x3 } from 'lucide-react';

export function IntegrationsHealth() {
  const integrations = [
    {
      name: 'GitHub',
      status: 'connected',
      icon: Github,
      statusText: 'Connected',
    },
    {
      name: 'Jira',
      status: 'connected',
      icon: Grid3x3,
      statusText: 'Connected',
    },
    {
      name: 'Stitch',
      status: 'warning',
      icon: Grid3x3,
      statusText: 'Needs attention',
    },
    {
      name: 'MCP',
      status: 'connected',
      icon: Grid3x3,
      statusText: 'Connected',
    },
  ];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4 text-white">Integrations Health</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          const isConnected = integration.status === 'connected';
          return (
            <div
              key={integration.name}
              className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-4 flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-slate-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-medium text-white">{integration.name}</h4>
                  {isConnected ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{integration.statusText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
