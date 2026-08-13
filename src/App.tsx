import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(
    window.location.hash.replace('#', '') || '/dashboard'
  );

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.replace('#', '') || '/dashboard');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentRoute === '/landing') {
      return <LandingPage />;
    }
    if (currentRoute === '/settings') {
      return <SettingsPage />;
    }
    return <DashboardPage />;
  };

  return renderPage();
}
