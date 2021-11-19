import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import SearchBar from "./SearchBar";
import "../../utils/__mocks__/matchMedia";

describe("Testing SearchBar component", () => {
  beforeAll(() => {});

  test("term value is updated correctly", () => {
    const onSubmit = jest.fn();
    render(<SearchBar onSubmit={onSubmit} hasResult={true} />);

    const input = screen.getByTestId("search-input");
    UserEvent.type(input, "octocat");

    expect(input.value).toBe("octocat");
  });

  test("if no results are available it should show No results label", () => {
    const onSubmit = jest.fn();
    render(<SearchBar onSubmit={onSubmit} hasResult={false} />);

    const noResultsLabel = screen.getByTestId("no-results");
    UserEvent.type(noResultsLabel, "something");

    expect(noResultsLabel.textContent).toBe("No results");
  });
});
