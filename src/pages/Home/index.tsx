import "./styles.scss";

import ArtworksList from "@components/ArtworksList";
import Layout from "@components/Layout";
import SectionTitle from "@components/SectionTitle";
import React from "react";

import SearchInput from "@/pages/Home/SearchInput";
import SpecialGallery from "@/pages/Home/SpecialGallery";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <h1 className="hello-message dark-gray">
        {"Let's find some "}
        <span className="deep-orange">art</span>
        {" here!"}
      </h1>
      <SearchInput />
      <SectionTitle
        smallOrangeText="Topics for you"
        bigGrayText="Our special gallery"
      />
      <SpecialGallery />
      <SectionTitle
        smallOrangeText="Here some more"
        bigGrayText="Other works for you"
      />
      <ArtworksList type="recommendations" />
    </Layout>
  );
};

export default Home;
