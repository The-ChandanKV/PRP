import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('renders dashboard header with title and subtitle', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Overview of your PRPilot workflows')).toBeInTheDocument();
  });

  it('displays all four KPI stat cards', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Open PRs')).toBeInTheDocument();
    expect(screen.getByText('Runs this week')).toBeInTheDocument();
    expect(screen.getByText('Avg. review time')).toBeInTheDocument();
    expect(screen.getByText('Success rate')).toBeInTheDocument();
  });

  it('shows recent runs section with at least 5 rows', () => {
    render(<DashboardPage />);
    expect(screen.getByText('Recent runs')).toBeInTheDocument();
    const statusBadges = screen.getAllByText(/completed|running|failed|queued/i);
    expect(statusBadges.length).toBeGreaterThanOrEqual(5);
  });

  it('displays quick actions panel with action buttons', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/New run from Jira/i)).toBeInTheDocument();
    expect(screen.getByText(/View open PRs/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Settings/i)).toBeInTheDocument();
  });

  it('shows integrations health section with status indicators', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Jira/i)).toBeInTheDocument();
    expect(screen.getByText(/Stitch/i)).toBeInTheDocument();
    expect(screen.getByText(/MCP/i)).toBeInTheDocument();
  });
});
