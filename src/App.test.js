import React from 'react';
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

// smoke test
test('renders App components without crashes', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});