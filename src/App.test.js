import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test main page', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is my app/i);
  expect(linkElement).toBeInTheDocument();
});
