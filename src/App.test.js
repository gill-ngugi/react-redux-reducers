import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

test('renders Redux Counter App heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headingElement = screen.getByText(/Redux Counter App/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders counter buttons', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const incrementButton = screen.getByText(/increment/i);
  const decrementButton = screen.getByText(/decrement/i);
  const resetButton = screen.getByText(/reset/i);
  
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});

test('renders initial counter value', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const counterValue = screen.getByText(/Counter: 0/i);
  expect(counterValue).toBeInTheDocument();
});
