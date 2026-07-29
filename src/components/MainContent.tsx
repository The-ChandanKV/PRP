import React from "react";

export default function MainContent() {
  return (
    <main className="flex-1 md:ml-64 relative overflow-y-auto overflow-x-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="max-w-4xl mx-auto p-8 lg:p-12 pb-32">
        <header className="mb-10 animate-fade-in-up">
          <h1 className="font-headline-xl text-headline-xl accent-gradient-text mb-2">
            Precision Media Relations, Accelerated by AI
          </h1>
          <p className="text-on-surface-variant text-body-md font-body-md flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">info</span>
            AI-powered GitHub PR automation
          </p>
        </header>
        {/* Profile Tab Content */}
        <div className="space-y-8 animate-fade-in-up" id="content-profile">
          <div className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-semibold text-on-surface mb-6 border-b border-white/10 pb-4">
              Public Profile
            </h3>
            <div className="flex items-start gap-8 mb-8">
              <div className="relative group cursor-pointer">
                <img
                  alt="Avatar upload"
                  className="w-24 h-24 rounded-full object-cover border-2 border-surface-variant"
                  data-alt="A detailed close-up of a futuristic glowing profile avatar placeholder, highly detailed neon cyan and indigo outlines on a pure black background."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBetbIDvEOoJpJtc4-NTi9rmoOBmoiiCkpiXBe8cN9bUKitbdZzCih5BNwNBwesOoPCTSRFEIVPE3DUTaVGKQaH6y-GCnyYIQWSXjGVBpe1oCDeoLb8obaTG9Es4ZMnYlP_x7dMKv_4iPUWg67MV79SMZ3Jg0zFQF3UhuT_xNsNny-ZiAKXQ_GDUOfSctHYvPn9jT_EpYobPjO21hZiaCJhpKaEIrvhtDzUPURcoEWtYpgjRYM20w429yXNruEaHglcZHCCUEnZr_8"
                />
                <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white">
                    photo_camera
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-body-sm text-on-surface-variant mb-1 font-label-caps text-label-caps">
                    Display Name
                  </label>
                  <input
                    className="input-glass w-full px-4 py-2.5 rounded-lg text-on-surface font-code-md text-code-md"
                    type="text"
                    value="Jane Developer"
                  />
                </div>
                <div>
                  <label className="block text-body-sm text-on-surface-variant mb-1 font-label-caps text-label-caps">
                    Bio
                  </label>
                  <textarea
                    className="input-glass w-full px-4 py-2.5 rounded-lg text-on-surface font-code-md text-code-md"
                    rows="3"
                  >
                    Senior Engineer working on AI tooling.
                  </textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-body-md font-semibold text-on-surface mb-4">
                Connections
              </h4>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-white/5">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl">
                    code
                  </span>
                  <div>
                    <p className="font-medium text-on-surface">
                      GitHub Organization
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Not connected
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-surface-variant hover:bg-surface-bright text-on-surface rounded-lg transition-colors font-body-sm text-body-sm">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Notifications Tab Content (Hidden by default) */}
        <div className="space-y-8 hidden" id="content-notifications">
          <div className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-semibold text-on-surface mb-6 border-b border-white/10 pb-4">
              Alert Preferences
            </h3>
            <div className="space-y-6">
              {/* Toggle Item 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-on-surface">Email Digests</p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Receive daily summaries of PR activity.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    checked=""
                    className="sr-only peer"
                    type="checkbox"
                    value=""
                  />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              {/* Toggle Item 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-on-surface">
                    PR Summary Alerts
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Instant notifications for AI-generated PR summaries.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    checked=""
                    className="sr-only peer"
                    type="checkbox"
                    value=""
                  />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              {/* Toggle Item 3 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-on-surface">
                    Pipeline Failures
                  </p>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Alert me immediately if a CI/CD pipeline fails.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" value="" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Security Tab Content (Hidden by default) */}
        <div className="space-y-8 hidden" id="content-security">
          <div className="glass-panel rounded-xl p-8">
            <h3 className="text-xl font-semibold text-on-surface mb-6 border-b border-white/10 pb-4">
              Account Security
            </h3>
            <div className="space-y-6 max-w-md">
              <div>
                <label className="block text-body-sm text-on-surface-variant mb-1 font-label-caps text-label-caps">
                  Current Password
                </label>
                <input
                  className="input-glass w-full px-4 py-2.5 rounded-lg text-on-surface font-code-md text-code-md"
                  type="password"
                />
              </div>
              <div>
                <label className="block text-body-sm text-on-surface-variant mb-1 font-label-caps text-label-caps">
                  New Password
                </label>
                <input
                  className="input-glass w-full px-4 py-2.5 rounded-lg text-on-surface font-code-md text-code-md"
                  type="password"
                />
              </div>
              <button className="px-4 py-2 border border-white/10 hover:bg-white/5 rounded-lg text-on-surface transition-colors font-body-sm">
                Update Password
              </button>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-medium text-on-surface">
                    Two-Factor Authentication (2FA)
                  </h4>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" value="" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 glass-panel border-t-0 border-t border-white/10 p-4 px-8 flex justify-end gap-4 z-30">
        <button className="px-6 py-2.5 rounded-lg text-on-surface font-medium hover:bg-white/5 transition-colors border border-transparent">
          Cancel
        </button>
        <button className="btn-primary px-6 py-2.5 rounded-lg text-white font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">save</span>
          Save Changes
        </button>
      </div>
    </main>
  );
}
