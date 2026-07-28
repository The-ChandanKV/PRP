import React from "react";

const Security: React.FC = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto">
      {/* Main Content */}
      <main className="flex-1 py-xl px-lg lg:px-2xl w-full min-w-0">
        <div className="max-w-3xl mx-auto space-y-[48px]">
          {/* API Keys */}
          <section className="glass-card rounded-xl p-lg md:p-xl fade-in-up tilt-card">
            <div className="flex justify-between items-end border-b border-outline-variant pb-md mb-[16px]">
              <div>
                <h2 className="text-headline-md font-headline-md text-on-surface">
                  API Keys
                </h2>
                <p className="text-sm text-on-surface-variant mt-2">
                  Manage keys used to authenticate API requests.
                </p>
              </div>
              <button className="btn-primary px-md py-sm rounded-lg text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
                Generate New Key
              </button>
            </div>
            <div className="space-y-[16px]">
              {/* Key Item 1 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-md border-b border-outline-variant hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <div className="mb-sm md:mb-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-on-surface">
                      Production Main
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-surface/50 text-on-surface-variant px-2 py-0.5 rounded border border-outline-variant">
                      Never Used
                    </span>
                  </div>
                  <div className="font-mono-code text-sm text-on-surface-variant mt-2 flex items-center gap-2">
                    prp_live_xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    <button
                      className="text-on-surface-variant hover:text-white transition-colors p-1"
                      title="Copy"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        content_copy
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-on-surface-variant">
                    Created Oct 24, 2023
                  </span>
                  <button className="text-error hover:text-red-400 font-medium transition-colors text-sm">
                    Revoke
                  </button>
                </div>
              </div>
              {/* Key Item 2 */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-md hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <div className="mb-sm md:mb-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-on-surface">
                      Local Development
                    </h3>
                  </div>
                  <div className="font-mono-code text-sm text-on-surface-variant mt-2 flex items-center gap-2">
                    prp_test_xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    <button
                      className="text-on-surface-variant hover:text-white transition-colors p-1"
                      title="Copy"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        content_copy
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-on-surface-variant">
                    Last used 2h ago
                  </span>
                  <button className="text-error hover:text-red-400 font-medium transition-colors text-sm">
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Security;
