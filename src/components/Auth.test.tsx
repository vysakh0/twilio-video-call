import React from 'react'
import ReactDOM from 'react-dom'
import Auth from './Auth'
import { render, fireEvent } from '@testing-library/react'

let container: any = null


test("decrements", async () => {
  const { getByText, getByRole } = render(<Auth heading='test' authenticate={jest.fn()} />);
  for (let i = 0; i < 3; i++) {
    fireEvent.click(getByRole("button"))
  }
  expect(getByText(/Press/i).textContent).toContain('2 times')
});

test("authenticate on the 5th click", async () => {
  const authenticate = jest.fn();
  const { getByText, getByRole } = render(<Auth heading='test' authenticate={authenticate} />);
  for (let i = 0; i < 5; i++) {
    fireEvent.click(getByRole("button"))
  }
  expect(authenticate).toBeCalled();
});