import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render, fireEvent } from '@testing-library/react'

let container: any = null


test("Show twilio page on the 5th click", async () => {
  const { getByRole } = render(<App />);
  for (let i = 0; i < 5; i++) {
    fireEvent.click(getByRole("button"))
  }
  expect(getByRole('heading').textContent).toContain('Hello')
});