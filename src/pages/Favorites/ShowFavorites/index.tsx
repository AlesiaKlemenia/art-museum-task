import ArtworksList from "@components/ArtworksList";
import SectionTitle from "@components/SectionTitle";

import BookmarkBig from "@/assets/icons/bookmark-big.svg";

const ShowFavorites = (): JSX.Element => {
  return (
    <>
      <h1 className="hello-message favorites-h1">
        Here Are Your
        <br />
        <span className="deep-orange favorites-span">
          <BookmarkBig />
          Favorites
        </span>
        <br />
      </h1>

      <SectionTitle
        smallOrangeText="Saved by you"
        bigGrayText="Your favorites list"
      />
      <ArtworksList type="favorites" />
    </>
  );
};

export default ShowFavorites;
