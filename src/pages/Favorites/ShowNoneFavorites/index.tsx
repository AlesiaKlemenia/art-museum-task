import BackToHomeButton from "@components/BackToHomeButton";
import React from "react";

import BookmarkBig from "@/assets/icons/bookmark-big.svg";

const ShowNoneFavorites = (): JSX.Element => {
  return (
    <>
      <h1 className="hello-message favorites-h1">
        Here Will Be Your
        <br />
        <span className="deep-orange favorites-span">
          <BookmarkBig />
          Favorites
        </span>
        <br />
      </h1>

      <BackToHomeButton />
    </>
  );
};

export default ShowNoneFavorites;
