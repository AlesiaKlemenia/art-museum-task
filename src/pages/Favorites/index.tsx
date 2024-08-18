import "./styles.scss";

import Layout from "@components/Layout";

import ShowFavorites from "@/pages/Favorites/ShowFavorites";
import ShowNoneFavorites from "@/pages/Favorites/ShowNoneFavorites";
import sessionStorageUtils from "@/utils/sessionStorage";

const Favorites = (): JSX.Element => {
  return (
    <Layout>
      {sessionStorageUtils.getFavorites().length ? (
        <ShowFavorites />
      ) : (
        <ShowNoneFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
