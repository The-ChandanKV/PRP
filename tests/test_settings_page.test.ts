import { render, screen, fireEvent } from '@testing-library/react';
import Settings from '../src/components/Settings';

describe('Settings Page', () => {
  test('renders the settings page with a dark mode toggle and save button', () => {
    render(<Settings />);
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/dark mode/i)).toBeInTheDocument();
  });

  test('toggles dark mode', () => {
    render(<Settings />);
    const toggle = screen.getByLabelText(/dark mode/i);
    fireEvent.click(toggle);
    expect(toggle).toBeChecked(); // Assuming toggle changes state
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  test('displays success message on save', () => {
    render(<Settings />);
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);
    expect(screen.getByText(/settings saved successfully/i)).toBeInTheDocument();
  });

  test('displays error message on save failure', () => {
    render(<Settings />);
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);
    expect(screen.getByText(/error saving settings/i)).toBeInTheDocument();
  });
});
