import React, { useState } from 'react';
import { 
  GitPullRequest, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Terminal, 
  ChevronDown, 
  Cpu, 
  Lock, 
  BellRing, 
  Workflow
} from 'lucide-react';

export function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Radial Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />

      {/* Sticky Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GitPullRequest className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">PRPilot</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono">
              v2.4
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#signin" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
              Sign In
            </a>
            <a href="#getstarted" className="inline-flex items-center space-x-2 text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-200 transform hover:scale-[1.02]">
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Powered by Gemini 3.1 & Advanced AI</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Automate Code Reviews with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
                AI Precision
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              PRPilot reviews pull requests instantly, detects security bugs, enforces code quality, and generates intelligent summaries — saving your engineering team 10+ hours per week.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all transform hover:scale-[1.02]">
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold backdrop-blur-xl transition-all">
                <Code2 className="w-5 h-5 text-slate-400" />
                <span>View Sample PR</span>
              </button>
            </div>

            <div className="pt-4 flex items-center space-x-6 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>1-minute GitHub setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Code Review IDE Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-30 blur-2xl animate-pulse-glow" />
            <div className="relative bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>pull_request_review.py</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Code Diff Preview */}
              <div className="p-4 font-mono text-xs space-y-2 leading-relaxed bg-slate-950/40">
                <div className="text-slate-500"># PRPilot AI Automated Security Review</div>
                <div className="text-emerald-400 bg-emerald-950/30 p-1.5 rounded border border-emerald-500/20">
                  + def test_pr_security_authorization():
                </div>
                <div className="text-emerald-400 bg-emerald-950/30 p-1.5 rounded border border-emerald-500/20">
                  +     assert user.has_permission("PR_MERGE")
                </div>
                <div className="text-rose-400 bg-rose-950/30 p-1.5 rounded border border-rose-500/20">
                  -     # UNSECURED: bypass_auth_check()
                </div>

                {/* AI Review Badge Overlay */}
                <div className="mt-4 p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-indigo-300 font-sans">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold">0 Security Vulnerabilities Found</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    APPROVED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="py-20 px-6 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need to automate your PR workflow
            </h2>
            <p className="text-slate-400 text-base">
              Built for engineering teams who demand code quality, rapid iteration, and enterprise security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all duration-300 rounded-2xl p-6 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Automated PR Reviews</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instant line-by-line code feedback on every pull request, detecting syntax errors, logic bugs, and anti-patterns.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all duration-300 rounded-2xl p-6 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Instant Security Scanning</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prevent hardcoded secrets, SQL injection risks, and dependency vulnerabilities from reaching production.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)] transition-all duration-300 rounded-2xl p-6 space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Smart Context Analysis</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Understands your entire repository architecture to provide relevant refactoring suggestions and test coverage checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Counter Section */}
      <section className="py-16 px-6 border-t border-slate-800/60 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center space-y-2">
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">99.8%</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Review Accuracy</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center space-y-2">
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">10x</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Faster Merge Times</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center space-y-2">
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">50,000+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">PRs Merged</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center space-y-2">
            <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">200+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Dev Teams</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Flexible plans for every team</h2>
            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-900 border border-slate-800 space-x-2">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${!isAnnual ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center space-x-1 ${isAnnual ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
              >
                <span>Annual</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full border border-emerald-500/30">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-slate-400 text-xs">For solo developers & small open source projects.</p>
                <div className="text-3xl font-extrabold">$0 <span className="text-xs font-normal text-slate-400">/ forever</span></div>
                <ul className="space-y-3 text-xs text-slate-300 pt-4 border-t border-slate-800">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Up to 5 PRs / month</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Basic security checks</span></li>
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs transition-colors">Start Free</button>
            </div>

            {/* Pro Tier (Popular) */}
            <div className="bg-slate-900/80 border-2 border-indigo-500 rounded-2xl p-8 space-y-6 flex flex-col justify-between relative shadow-[0_0_40px_rgba(99,102,241,0.2)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-[10px] font-extrabold uppercase rounded-full shadow">
                Most Popular
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-slate-400 text-xs">For growing engineering teams requiring fast PR approvals.</p>
                <div className="text-3xl font-extrabold">${isAnnual ? '24' : '29'} <span className="text-xs font-normal text-slate-400">/ user / mo</span></div>
                <ul className="space-y-3 text-xs text-slate-300 pt-4 border-t border-slate-800">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Unlimited PR reviews</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Advanced vulnerability scanning</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Slack & Teams integrations</span></li>
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 font-semibold text-xs text-white shadow transition-transform transform hover:scale-[1.02]">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-slate-400 text-xs">For high-security organizations with custom compliance.</p>
                <div className="text-3xl font-extrabold">Custom</div>
                <ul className="space-y-3 text-xs text-slate-300 pt-4 border-t border-slate-800">
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Self-hosted / VPC deployment</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Custom LLM fine-tuning</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Dedicated 24/7 support SLA</span></li>
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-xs transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 px-6 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How does PRPilot integrate with GitHub?', a: 'PRPilot connects as a native GitHub App in under 1 minute. It automatically triggers on every pull request created or updated.' },
              { q: 'Is my source code secure?', a: 'Yes. PRPilot never stores your proprietary code. All analysis runs in isolated memory and is discarded immediately after the review completes.' },
              { q: 'Can I customize the AI code review rules?', a: 'Absolutely. You can define custom repo rules via an AGENTS.md or config file to enforce project-specific coding guidelines.' },
            ].map((faq, index) => (
              <div key={index} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-semibold text-sm flex items-center justify-between hover:text-indigo-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === index ? 'rotate-180 text-indigo-400' : 'text-slate-500'}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/80 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center space-x-3">
            <GitPullRequest className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-white text-sm">PRPilot</span>
            <span>&copy; 2026 PRPilot Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
