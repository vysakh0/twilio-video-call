import React from 'react'
import ReactDOM from 'react-dom'
import Auth from './Auth'

import { act } from "react-dom/test-utils";

let container: any = null

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("contains the proper heading", () => {
  act(() => {
    ReactDOM.render(<Auth heading='Login page check' />, container);
  });
  expect(container.textContent).toContain("Login page check");
});

it("increments", () => {
  act(() => {
    ReactDOM.render(<Auth heading='test' />, container);
  });
  act(() => {
    container
      .querySelector("[data-testid=increment]")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })
  expect(container.textContent).toContain("Press the \"I'm human\" button 4 times");
});