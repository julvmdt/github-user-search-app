import React from "react";
import { render, screen } from "@testing-library/react";

import UserInfoGithub from "./UserInfoGithub";

describe("Testing UserInfoGithub Component", () => {
  test("render component with correct props", () => {
    const userInfo = {
      public_repos: "8",
      followers: "10",
      following: "8",
    };

    render(<UserInfoGithub userInfo={userInfo} />);

    expect(screen.getByTestId("public-repos").textContent).toBe("8");
    expect(screen.getByTestId("followers").textContent).toBe("10");
    expect(screen.getByTestId("following").textContent).toBe("8");
  });
});
