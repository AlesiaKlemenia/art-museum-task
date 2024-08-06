import "./styles.scss";

import { IAddToFavoritesButtonProps } from "@components/AddToFavoritesButton/interfaces";
import { useEffect, useState } from "react";

import Bookmark from "@/assets/icons/bookmark.svg";
import BookmarkFilled from "@/assets/icons/bookmark-filled.svg";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";

const AddToFavoritesButton = ({
  id,
  image_id,
}: IAddToFavoritesButtonProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (item: IArtworkBriefInfo) => item.id !== id,
      );
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const newFavorite = {
        id,
        image_id,
      };
      const updatedFavorites = [...favorites, newFavorite];
      sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites") || "[]");
    const isItemFavorite = favorites.some(
      (item: IArtworkBriefInfo) => item.id === id,
    );
    setIsFavorite(isItemFavorite);
  }, [id]);

  return (
    <button
      type="button"
      className="add-to-favorites-wrapper"
      onClick={toggleFavorite}
    >
      {isFavorite ? <BookmarkFilled /> : <Bookmark />}
    </button>
  );
};

export default AddToFavoritesButton;
