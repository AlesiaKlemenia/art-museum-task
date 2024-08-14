import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import BackToHomeButton from "../../components/BackToHomeButton";

describe("BackToHome", () => {
  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  test("Render button correctly", () => {
    render(
      <MemoryRouter>
        <BackToHomeButton />
      </MemoryRouter>,
    );
    const aEl = screen.getByTestId("back-to-home-link");
    expect(aEl).toBeInTheDocument();
    expect(aEl.textContent).toContain("Back Home");
  });
});
