import React from 'react';
import { Github, Blocks, Puzzle, Cpu } from 'lucide-react';

export type IntegrationStatus = {
  name: string;
  status: 'connected' | 'needs_attention';
  statusText: string;
  icon: React.ElementType;
};

const mockIntegrations: IntegrationStatus[] = [
  {
    name: 'GitHub',
    status: 'connected',
    statusText: 'Connected',
    icon: Github,
  },
  {
    name: 'Jira',
    status: 'connected',
    statusText: 'Connected',
    icon: Blocks,
  },
  {
    name: 'Stitch',
    status: 'needs_attention',
    statusText: 'Needs attention',
    icon: Puzzle,
  },
  {
    name: 'MCP',
    status: 'connected',
    statusText: 'Connected',
    icon: Cpu,
  },
];

export function IntegrationsHealth() {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Integrations Health</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockIntegrations.map((integration) => {
          const Icon = integration.icon;
          const statusColor = integration.status === 'connected' ? 'bg-emerald-500' : 'bg-amber-500';
          const statusRing = integration.status === 'connected' ? 'ring-emerald-500/20' : 'ring-amber-500/20';

          return (
            <div
              key={integration.name}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-xl p-4 hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/60 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{integration.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{integration.statusText}</p>
                  </div>
                </div>
                <div className={`w-2.5 h-2.5 rounded-full ${statusColor} ring-4 ${statusRing}`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IntegrationsHealth;
