import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import App from "./App";
import github from "../api/github";
import { response } from "../utils/__mocks__/githubAPI";
import "../utils/__mocks__/matchMedia";

jest.mock("../api/github");

describe("Testing App component", () => {
  test("get userInfo from GitHub API", async () => {
    const promise = Promise.resolve({
      data: response,
    });

    github.get.mockReturnValue(promise);

    render(<App />);

    const input = screen.getByTestId("search-input");

    UserEvent.type(input, "octocat");
    expect(input.value).toBe("octocat");

    const button = screen.getByTestId("search-bar-button");
    UserEvent.click(button);

    await waitFor(() => {
      expect(github.get).toHaveBeenCalledTimes(1);

      expect(screen.getByTestId("avatar").src).toContain(
        "https://avatars-url.com"
      );
      expect(screen.getByTestId("name").textContent).toBe("The Octocat");
      expect(screen.getByTestId("login").textContent).toBe("@octocat");
      expect(screen.getByTestId("created").textContent).toBe(
        "Joined 20 January 2012"
      );
      expect(screen.getByTestId("bio").textContent).toBe(
        "This profile has no bio"
      );
    });
  });

  test("get userInfo from GitHub API fails", async () => {
    const promise = Promise.reject({
      message: "failed",
    });

    github.get.mockReturnValue(promise);

    render(<App />);

    const input = screen.getByTestId("search-input");

    UserEvent.type(input, "octocat");
    expect(input.value).toBe("octocat");

    const button = screen.getByTestId("search-bar-button");
    UserEvent.click(button);

    await waitFor(() => {
      expect(github.get).toHaveBeenCalledTimes(1);

      expect(screen.queryByTestId("result-card-container")).toBeNull();
      expect(screen.getByTestId("no-results").textContent).toEqual(
        "No results"
      );
    });
  });

  test("toggles theme back and forth", () => {
    render(<App />);

    const toggle = screen.getByTestId("toggle");
    UserEvent.click(toggle);
    expect(document.body.classList.contains("dark")).toBeTruthy();

    UserEvent.click(toggle);
    expect(document.body.classList.contains("light")).toBeTruthy();
  });
});
