import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Favorites from "@/pages/Favorites";

describe("Favorites Page", () => {
  const mockId = 11;
  const mockImageId = "911188c2-8ed7-dae2-80e2-878d7d82f9dd";

  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  test("Render page correctly without favorites", () => {
    // sessionStorage.setItem(
    //   "favorites",
    //   JSON.stringify([{ id: mockId, image_id: mockImageId }]),
    // );
    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>,
    );
    const h1El = screen.getByTestId("none-favorites-header");
    expect(h1El).toBeInTheDocument();
    expect(h1El).toHaveTextContent("Here Will Be Your");
  });

  test("Render page correctly with favorites", () => {
    sessionStorage.setItem(
      "favorites",
      JSON.stringify([{ id: mockId, image_id: mockImageId }]),
    );
    render(
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>,
    );
    const favoritesTitleEl = screen.getByTestId("section-title");
    waitFor(() => {
      expect(favoritesTitleEl).toBeInTheDocument();
    });
  });
});
