import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelpPage from '../HelpPage';

describe('HelpPage', () => {
  test('renders HelpPage component', () => {
    render(<HelpPage mode="light" />);
    expect(screen.getByText('Help Center')).toBeInTheDocument();
  });

  test('contains all required sections', () => {
    render(<HelpPage mode="light" />);
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByText('How to Use the Application')).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('Contact / Support Information')).toBeInTheDocument();
  });

  test('applies correct text color based on mode', () => {
    const { container: lightContainer } = render(<HelpPage mode="light" />);
    expect(lightContainer.firstChild).toHaveClass('text-dark');

    const { container: darkContainer } = render(<HelpPage mode="dark" />);
    expect(darkContainer.firstChild).toHaveClass('text-light');
  });

  test('renders correct content in each section', () => {
    render(<HelpPage mode="light" />);
    expect(screen.getByText('Convert to Uppercase:')).toBeInTheDocument();
    expect(screen.getByText('Is my text saved anywhere?')).toBeInTheDocument();
    expect(screen.getByText('Email: support@textutils.com')).toBeInTheDocument();
  });
});
