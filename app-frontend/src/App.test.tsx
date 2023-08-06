import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search form', () => {
  render(<App />);
  const searchElement = screen.getByText(/Search Todo by description/i);
  expect(searchElement).toBeInTheDocument();
});

test('renders add form', () => {
  render(<App />);
   const addElement = screen.getByText(/Add User with Todo Item/i);
   expect(addElement).toBeInTheDocument();
});
