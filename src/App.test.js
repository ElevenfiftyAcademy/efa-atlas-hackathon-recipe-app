import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import data from './result.json';

describe("App", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(data)
      })
    })
  })
  test('renders search results header', () => {
    render(<App />);
    const linkElement = screen.getByText(/Recipes/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders recipe list', () => {
    render(<App />);
    const listElement = screen.getByTestId("recipe-list");
    expect(listElement).toBeInTheDocument();
  })
  
  test('renders first recipe', async () => {
    render(<App />);
    await waitFor(() => {
      const listItemElement = screen.getByText(/Apple Or Peach Strudel/i);
      expect(listItemElement).toBeInTheDocument();
    })
  })
  
})


