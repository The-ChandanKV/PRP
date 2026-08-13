import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import JiraIssueSCRUMPage from './pages/JiraIssueSCRUMPage';
import SettingsPage from './pages/SettingsPage';

type Route = 'landing' | 'dashboard' | 'settings' | 'jira';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('dashboard');

  const renderPage = () => {
    switch (currentRoute) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentRoute} />;
      case 'settings':
        return <SettingsPage onNavigate={setCurrentRoute} />;
      case 'jira':
        return <JiraIssueSCRUMPage />;
      default:
        return <DashboardPage onNavigate={setCurrentRoute} />;
    }
  };

  return renderPage();
}
