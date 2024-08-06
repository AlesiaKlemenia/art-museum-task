import "./styles.scss";

import ArtworksList from "@components/ArtworksList";
import Layout from "@components/Layout";
import SectionTitle from "@components/SectionTitle";
import React, { useState } from "react";

import { IArtworkSearchInfo } from "@/interfaces/IArtworkSearchInfo";
import SearchInput from "@/pages/Home/SearchInput";
import SpecialGallery from "@/pages/Home/SpecialGallery";
import { getApiSuggestions } from "@/utils/requests";

const Home = (): JSX.Element => {
  const [options, setOptions] = useState<IArtworkSearchInfo[]>([]);
  const [loading, setLoading] = useState(false);

  const getSuggestions = async (word: string): Promise<void> => {
    if (word) {
      setLoading(true);
      const response = await getApiSuggestions(word);
      setOptions(response.data);
      setLoading(false);
    } else {
      setOptions([]);
    }
  };

  return (
    <Layout>
      <h1 className="hello-message">
        {"Let's find some "}
        <span className="deep-orange">art</span>
        <br />
        here!
      </h1>
      <SearchInput
        loading={loading}
        options={options}
        requests={getSuggestions}
        setOptions={setOptions}
      />
      <SectionTitle
        smallOrangeText="Topics for you"
        bigGrayText="Our special gallery"
      />
      <SpecialGallery />
      <SectionTitle
        smallOrangeText="Here some more"
        bigGrayText="Other works for you"
      />
      <ArtworksList size="small" />
    </Layout>
  );
};

export default Home;
