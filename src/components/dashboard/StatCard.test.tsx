import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatCard from './StatCard';
import { TrendingUp } from 'lucide-react';

describe('StatCard', () => {
  it('renders label and value correctly', () => {
    render(
      <StatCard
        label="Open PRs"
        value="12"
        trend="up"
        icon={TrendingUp}
      />
    );
    expect(screen.getByText('Open PRs')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('displays trend indicator when provided', () => {
    const { container } = render(
      <StatCard
        label="Success rate"
        value="94%"
        trend="up"
        icon={TrendingUp}
      />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
