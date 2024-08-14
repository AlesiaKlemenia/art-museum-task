/* eslint-disable @typescript-eslint/ban-ts-comment */
import "@testing-library/jest-dom";

import AddToFavoritesButton from "@components/AddToFavoritesButton";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

import Bookmark from "@/assets/icons/bookmark.svg";
import BookmarkFilled from "@/assets/icons/bookmark-filled.svg";

describe("AddToFavoritesButton", () => {
  const mockId = 233334;
  const mockImageId = "911188c2-8ed7-dae2-80e2-878d7d82f9dd";

  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  describe("Button icon", () => {
    test("renders the button with the correct icon if isFavorite false", () => {
      render(<AddToFavoritesButton id={mockId} image_id={mockImageId} />);
      waitFor(() =>
        // @ts-ignore
        expect(screen.getByRole("button")).toContainElement(Bookmark),
      );
    });

    test("renders the button with the correct icon based if isFavorite false", () => {
      sessionStorage.setItem(
        "favorites",
        JSON.stringify([{ id: mockId, image_id: mockImageId }]),
      );
      render(<AddToFavoritesButton id={mockId} image_id={mockImageId} />);
      waitFor(() =>
        // @ts-ignore
        expect(screen.getByRole("button")).toContainElement(BookmarkFilled),
      );
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
