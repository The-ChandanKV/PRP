import { render, screen, fireEvent } from '@testing-library/react';
import SettingsPage from '../public/app';

describe('Settings Page', () => {
  test('renders Settings page with dark mode toggle and save button', () => {
    render(<SettingsPage />);
    const toggle = screen.getByLabelText(/dark mode/i);
    const saveButton = screen.getByRole('button', { name: /save/i });
    expect(toggle).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  test('toggles dark mode', () => {
    render(<SettingsPage />);
    const toggle = screen.getByLabelText(/dark mode/i);
    fireEvent.click(toggle);
    expect(toggle).toBeChecked();
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  test('shows success state after clicking save', () => {
    render(<SettingsPage />);
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);
    const successMessage = screen.getByText(/settings saved/i);
    expect(successMessage).toBeInTheDocument();
  });
});