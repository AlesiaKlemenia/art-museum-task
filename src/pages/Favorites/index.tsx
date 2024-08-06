import "./styles.scss";

import ArtworksList from "@components/ArtworksList";
import Layout from "@components/Layout";
import SectionTitle from "@components/SectionTitle";
import React from "react";

import BookmarkBig from "@/assets/icons/bookmark-big.svg";

const Favorites = (): JSX.Element => {
  return (
    <Layout>
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
      <div />
    </Layout>
  );
};

export default Favorites;
