import React from "react";
import { render, screen } from "@testing-library/react";

import UserInfo from "./UserInfo";

describe("Testing UserInfo Component", () => {
  test("render component with correct props", () => {
    const userInfo = {
      location: "Berlin",
      company: "Some Company",
      twitter_username: "Username",
      blog: "https://website.com",
    };

    render(<UserInfo userInfo={userInfo} />);

    expect(screen.getByTestId("location").textContent).toBe("Berlin");
    expect(screen.getByTestId("company").textContent).toBe("Some Company");
    expect(screen.getByTestId("twitter-username").textContent).toBe("Username");
    expect(screen.getByTestId("blog").textContent).toBe("https://website.com");
  });

  test("if prop not available show Not Available text", () => {
    const userInfo = {
      location: null,
      company: "Some Company",
      twitter_username: "Username",
      blog: undefined,
    };

    render(<UserInfo userInfo={userInfo} />);

    expect(screen.getByTestId("location").textContent).toBe("Not Available");
    expect(screen.getByTestId("company").textContent).toBe("Some Company");
    expect(screen.getByTestId("twitter-username").textContent).toBe("Username");
    expect(screen.getByTestId("blog").textContent).toBe("Not Available");
  });
});
