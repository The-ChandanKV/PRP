import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
    icon: <Github className="w-5 h-5 text-slate-400" />,
  },
  {
    name: 'Jira',
    status: 'connected',
    statusText: 'Connected',
    icon: (
      <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0z"/>
      </svg>
    ),
  },
  {
    name: 'Stitch',
    status: 'warning',
    statusText: 'Needs attention',
    icon: <ExternalLink className="w-5 h-5 text-slate-400" />,
  },
  {
    name: 'MCP',
    status: 'connected',
    statusText: 'Connected',
    icon: (
      <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export function IntegrationsHealth() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Integrations Health</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-slate-800/50 rounded-lg">
                  {integration.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{integration.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{integration.statusText}</p>
                </div>
              </div>
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  integration.status === 'connected'
                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]'
                    : 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                }`}
                title={integration.status === 'connected' ? 'Connected' : 'Warning'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntegrationsHealth;
