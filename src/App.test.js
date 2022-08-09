import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search results header', () => {
  render(<App />);
  const linkElement = screen.getByText(/search results/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders recipe list', () => {
  render(<App />);
  const listElement = screen.getByTestId("recipe-list");
  expect(listElement).toBeInTheDocument();
})

test('renders first recipe', () => {
  render(<App />);
  const listItemElement = screen.getByText(/Apple Or Peach Strudel/i);
  expect(listItemElement).toBeInTheDocument();
})
