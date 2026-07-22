import { render, screen, fireEvent } from '@testing-library/react';
import Settings from '../public/app';

describe('Settings Page', () => {
  test('should render Settings page', () => {
    render(<Settings />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  test('should toggle dark mode', () => {
    render(<Settings />);
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(toggle).toBeChecked();
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  test('should show success on clicking save', () => {
    render(<Settings />);
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);
    expect(screen.getByText('Preferences saved successfully')).toBeInTheDocument();
  });
});