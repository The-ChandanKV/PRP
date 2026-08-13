import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RecentRunsTable from './RecentRunsTable';

describe('RecentRunsTable', () => {
  it('renders table headers', () => {
    render(<RecentRunsTable />);
    expect(screen.getByText('Run ID')).toBeInTheDocument();
    expect(screen.getByText('Ticket')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Provider')).toBeInTheDocument();
    expect(screen.getByText('Updated')).toBeInTheDocument();
  });

  it('displays mock run data with different statuses', () => {
    render(<RecentRunsTable />);
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
    expect(screen.getByText(/running/i)).toBeInTheDocument();
    expect(screen.getByText(/failed/i)).toBeInTheDocument();
  });
});
