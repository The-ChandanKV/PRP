import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import JiraIssueSCRUMPage from './pages/JiraIssueSCRUMPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
  };

  // Expose navigate globally for components to use
  React.useEffect(() => {
    (window as any).navigate = navigate;
  }, []);

  // Route matching
  if (currentRoute === '/dashboard' || currentRoute === '/') {
    return <DashboardPage />;
  }
  
  if (currentRoute === '/landing') {
    return <LandingPage />;
  }

  if (currentRoute === '/jira-issue-scrum') {
    return <JiraIssueSCRUMPage />;
  }

  // Default fallback to dashboard
  return <DashboardPage />;
}
