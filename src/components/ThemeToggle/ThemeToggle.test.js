import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import ThemeToggle from "./ThemeToggle";

describe("Testing ToggleTheme Component", () => {
  test("theme label change when clicked", () => {
    const toggleTheme = jest.fn();
    const { rerender } = render(
      <ThemeToggle toggleTheme={toggleTheme} theme={"light"} />
    );

    const toggle = screen.getByTestId("toggle");
    const label = screen.getByTestId("label");

    UserEvent.click(toggle);
    rerender(<ThemeToggle toggleTheme={toggleTheme} theme={"dark"} />);
    expect(label.textContent).toBe("DARK");
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  test("icon change when clicked", () => {
    const toggleTheme = jest.fn();
    const { rerender } = render(
      <ThemeToggle toggleTheme={toggleTheme} theme={"light"} />
    );

    const toggleImg = screen.getByTestId("toggle");

    UserEvent.click(toggleImg);
    rerender(<ThemeToggle toggleTheme={toggleTheme} theme={"dark"} />);

    expect(toggleImg.src).toContain("http://localhost/icon-sun.svg");
  });
});
