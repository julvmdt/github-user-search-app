import React from "react";
import { render, screen } from "@testing-library/react";

import ResultCard from "./ResultCard";

describe("Testing UserInfoGithub Component", () => {
  test("render component with correct props", () => {
    const userInfo = {
      avatar_url: "https://some-url.com",
      name: "Octocat",
      login: "octocat",
      created_at: "2012-04-19T18:44:36Z",
      bio: "Some bio",
    };

    render(<ResultCard userInfo={userInfo} />);

    expect(screen.getByTestId("avatar").src).toContain("https://some-url.com");
    expect(screen.getByTestId("name").textContent).toBe("Octocat");
    expect(screen.getByTestId("login").textContent).toBe("@octocat");
    expect(screen.getByTestId("created").textContent).toBe(
      "Joined 19 April 2012"
    );
    expect(screen.getByTestId("bio").textContent).toBe("Some bio");
  });

  test("render nothing if no userInfo is available", () => {
    const userInfo = undefined;

    const wrapper = render(<ResultCard userInfo={userInfo} />);
    expect(wrapper.container.innerHTML).toHaveLength(0);
  });

  test("render component with login prop instead of name", () => {
    const userInfo = {
      avatar_url: "https://some-url.com",
      name: undefined,
      login: "octocat",
      created_at: "2012-04-19T18:44:36Z",
      bio: "Some bio",
    };

    render(<ResultCard userInfo={userInfo} />);

    expect(screen.getByTestId("avatar").src).toContain("https://some-url.com");
    expect(screen.getByTestId("name").textContent).toBe("octocat");
    expect(screen.getByTestId("login").textContent).toBe("@octocat");
    expect(screen.getByTestId("created").textContent).toBe(
      "Joined 19 April 2012"
    );
    expect(screen.getByTestId("bio").textContent).toBe("Some bio");
  });

  test("if prop bio is not available show This profile has no bio text", () => {
    const userInfo = {
      avatar_url: "https://some-url.com",
      name: "Octocat",
      login: "octocat",
      created_at: "2012-04-19T18:44:36Z",
      bio: null,
    };

    render(<ResultCard userInfo={userInfo} />);

    expect(screen.getByTestId("avatar").src).toContain("https://some-url.com");
    expect(screen.getByTestId("name").textContent).toBe("Octocat");
    expect(screen.getByTestId("login").textContent).toBe("@octocat");
    expect(screen.getByTestId("created").textContent).toBe(
      "Joined 19 April 2012"
    );
    expect(screen.getByTestId("bio").textContent).toBe(
      "This profile has no bio"
    );
  });
});
