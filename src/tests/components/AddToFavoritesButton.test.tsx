import "@testing-library/jest-dom";

import AddToFavoritesButton from "@components/AddToFavoritesButton";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

describe("AddToFavoritesButton", () => {
  const mockId = 233334;
  const mockImageId = "911188c2-8ed7-dae2-80e2-878d7d82f9dd";

  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  test("renders the mocked button icon correct", async () => {
    render(<AddToFavoritesButton id={mockId} image_id={mockImageId} />);
    await waitFor(() => {
      const buttonEl = screen.getByTestId("add-to-favorites-button");
      expect(buttonEl).toBeInTheDocument();
      expect(buttonEl).toContainHTML("<span />");
    });
  });

  test("updates the session storage when the button is clicked", () => {
    render(<AddToFavoritesButton id={mockId} image_id={mockImageId} />);
    fireEvent.click(screen.getByRole("button"));
    const favorites = JSON.parse(sessionStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual([{ id: mockId, image_id: mockImageId }]);
    fireEvent.click(screen.getByRole("button"));
    const updatedFavorites = JSON.parse(
      sessionStorage.getItem("favorites") || "[]",
    );
    expect(updatedFavorites).toEqual([]);
  });
});
