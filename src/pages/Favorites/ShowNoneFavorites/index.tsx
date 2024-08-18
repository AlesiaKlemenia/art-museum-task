import BackToHomeButton from "@components/BackToHomeButton";

import BookmarkBig from "@/assets/icons/bookmark-big.svg";

const ShowNoneFavorites = (): JSX.Element => {
  return (
    <>
      <h1
        className="hello-message favorites-h1"
        data-testid="none-favorites-header"
      >
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
