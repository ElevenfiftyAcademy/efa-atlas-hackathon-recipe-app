import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search results header', () => {
  render(<App />);
  const linkElement = screen.getByText(/search results/i);
  expect(linkElement).toBeInTheDocument();
});