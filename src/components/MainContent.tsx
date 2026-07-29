import React from "react";

interface MainContentProps {
  activeTab?: string;
}

export default function MainContent({ activeTab = "profile" }: MainContentProps) {
  return (
    <main className="flex-1 md:ml-64 relative overflow-y-auto overflow-x-hidden pt-20">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="max-w-4xl mx-auto p-8 lg:p-12 pb-32">
        <header className="mb-10 animate-fade-in-up">
          <h1 className="font-headline-xl text-3xl md:text-4xl font-bold accent-gradient-text mb-2">
            Precision Media Relations, Accelerated by AI
          </h1>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-cyan-400">info</span>
            AI-powered GitHub PR automation
          </p>
        </header>

        {/* Profile Tab Content */}
        <div className={`space-y-8 animate-fade-in-up ${activeTab === "profile" ? "block" : "hidden"}`}>
          <div className="glass-panel rounded-xl p-8 bg-[#0e1424]/80 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              Public Profile
            </h3>
            <div className="flex items-start gap-8 mb-8">
              <div className="relative group cursor-pointer flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/30 p-1 bg-[#060a12] shadow-lg shadow-cyan-950/50">
                  <img
                    alt="Avatar upload"
                    className="w-full h-full rounded-xl object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetbIDvEOoJpJtc4-NTi9rmoOBmoiiCkpiXBe8cN9bUKitbdZzCih5BNwNBwesOoPCTSRFEIVPE3DUTaVGKQaH6y-GCnyYIQWSXjGVBpe1oCDeoLb8obaTG9Es4ZMnYlP_x7dMKv_4iPUWg67MV79SMZ3Jg0zFQF3UhuT_xNsNny-ZiAKXQ_GDUOfSctHYvPn9jT_EpYobPjO21hZiaCJhpKaEIrvhtDzUPURcoEWtYpgjRYM20w429yXNruEaHglcZHCCUEnZr_8"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white">photo_camera</span>
                </div>
              </div>
              <div className="flex-1 space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-mono font-semibold">
                    Display Name
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 font-mono text-sm font-medium border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    type="text"
                    defaultValue="Jane Developer"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-mono font-semibold">
                    Bio
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0b101c] text-white font-mono text-sm border border-white/10 focus:outline-none focus:border-cyan-400"
                    rows={3}
                    defaultValue="Senior Engineer working on AI tooling."
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white mb-4">
                Connections
              </h4>
              <div className="flex items-center justify-between p-4 bg-[#080d1a] rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      GitHub Organization
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Not connected
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors text-xs font-medium border border-white/10">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Tab Content */}
        <div className={`space-y-8 animate-fade-in-up ${activeTab === "notifications" ? "block" : "hidden"}`}>
          <div className="glass-panel rounded-xl p-8 bg-[#0e1424]/80 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              Alert Preferences
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">Email Digests</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Receive daily summaries of PR activity.
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-indigo-500 rounded cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">PR Summary Alerts</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Instant notifications for AI-generated PR summaries.
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 accent-indigo-500 rounded cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">Pipeline Failures</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Alert me immediately if a CI/CD pipeline fails.
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-indigo-500 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Tab Content */}
        <div className={`space-y-8 animate-fade-in-up ${activeTab === "security" ? "block" : "hidden"}`}>
          <div className="glass-panel rounded-xl p-8 bg-[#0e1424]/80 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              Account Security
            </h3>
            <div className="space-y-6 max-w-md">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-mono font-semibold">
                  Current Password
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b101c] text-white font-mono text-sm border border-white/10 focus:outline-none focus:border-cyan-400"
                  type="password"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-mono font-semibold">
                  New Password
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b101c] text-white font-mono text-sm border border-white/10 focus:outline-none focus:border-cyan-400"
                  type="password"
                />
              </div>
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium border border-white/10">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-[#090d16]/90 backdrop-blur-md border-t border-white/10 p-4 px-8 flex justify-end gap-4 z-30">
        <button className="px-6 py-2.5 rounded-lg text-slate-300 font-medium hover:bg-white/5 transition-colors border border-transparent">
          Cancel
        </button>
        <button className="btn-primary px-6 py-2.5 rounded-lg text-white font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <span className="material-symbols-outlined text-sm">save</span>
          Save Changes
        </button>
      </div>
    </main>
  );
}
