import "./styles.scss";

import { IAddToFavoritesButtonProps } from "@components/AddToFavoritesButton/interfaces";
import { useEffect, useState } from "react";

import Bookmark from "@/assets/icons/bookmark.svg";
import BookmarkFilled from "@/assets/icons/bookmark-filled.svg";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import sessionStorageUtils, { SessionStorage } from "@/utils/sessionStorage";

const AddToFavoritesButton = ({
  id,
  image_id,
}: IAddToFavoritesButtonProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    const favorites: SessionStorage[] = sessionStorageUtils.getFavorites();

    if (isFavorite) {
      sessionStorageUtils.setFavorites(
        favorites.filter((item) => item.id !== id),
      );
    } else {
      sessionStorageUtils.setFavorites([...favorites, { id, image_id }]);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favorites = sessionStorageUtils.getFavorites();
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
      data-testid="add-to-favorites-button"
    >
      {isFavorite ? <BookmarkFilled /> : <Bookmark />}
    </button>
  );
};

export default AddToFavoritesButton;
