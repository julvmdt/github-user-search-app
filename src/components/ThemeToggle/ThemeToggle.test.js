import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ThemeToggle from "./ThemeToggle";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes theme label when clicked", () => {
  const toggleTheme = jest.fn();
  act(() => {
    render(
      <ThemeToggle toggleTheme={toggleTheme} theme={"light"} />,
      container
    );
  });
  const onToggleButton = container.querySelector("[data-testid=toggle]");
  const label = container.querySelector("[data-testid=label]");

  expect(label.textContent).toBe("LIGHT");

  act(() => {
    onToggleButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    render(<ThemeToggle toggleTheme={toggleTheme} theme={"dark"} />, container);
  });

  expect(label.textContent).toBe("DARK");
  expect(toggleTheme).toHaveBeenCalledTimes(1);
});
