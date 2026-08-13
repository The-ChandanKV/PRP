import React from 'react';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';

export default function App() {
  const path = window.location.pathname;
  
  if (path === '/landing') {
    return <LandingPage />;
  }
  
  return <DashboardPage />;
}
