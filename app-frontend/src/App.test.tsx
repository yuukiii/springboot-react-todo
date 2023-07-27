import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shorten url form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shorten URL/i);
  expect(linkElement).toBeInTheDocument();
});
