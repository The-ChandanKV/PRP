import React from 'react';
import { PageHeader } from '../components/JiraIssueSCRUM/PageHeader';
import {
  Activity,
  AlertCircle,
  GitPullRequest,
  ShieldCheck,
  Users
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      </header>
      <main className="mx-auto max-w-5xl space-y-6 px-6 py-8">
        <section className="flex space-x-6">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex-1">
            <h2 className="font-medium text-lg"><GitPullRequest className="inline h-6 w-6" /> PRs Reviewed:</h2>
            <p className="text-xl">1,280</p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex-1">
            <h2 className="font-medium text-lg"><ShieldCheck className="inline h-6 w-6" /> Security Vulns Blocked:</h2>
            <p className="text-xl">42</p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex-1">
            <h2 className="font-medium text-lg"><Activity className="inline h-6 w-6" /> Avg Merge Time:</h2>
            <p className="text-xl">12m</p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex-1">
            <h2 className="font-medium text-lg"><Users className="inline h-6 w-6" /> Test Coverage:</h2>
            <p className="text-xl">98.4%</p>
          </div>
        </section>
        <section className="mt-6">
          <PageHeader title="Active PR Reviews" />
          <div className="border border-slate-800 rounded-lg mt-4">
            <table className="w-full text-left">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-4 py-2">PR Title</th>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Security Status</th>
                  <th className="px-4 py-2">AI Verdict</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr>
                  <td className="px-4 py-2">Example PR Title</td>
                  <td className="px-4 py-2">Author Name</td>
                  <td className="px-4 py-2">Safe</td>
                  <td className="px-4 py-2">Approved</td>
                  <td className="px-4 py-2">Actions</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-6">
          <PageHeader title="Filter Tabs" />
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg">All</button>
            <button className="px-4 py-2 bg-gray-300 rounded-lg">Pending Review</button>
            <button className="px-4 py-2 bg-gray-300 rounded-lg">Approved</button>
            <button className="px-4 py-2 bg-gray-300 rounded-lg">Needs Work</button>
          </div>
        </section>
      </main>
    </div>
  );
}