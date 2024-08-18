import "./styles.scss";

import ArtworkCardCompact from "@components/ArtworksList/ArtworkCardCompact";
import { IArtworksListProps } from "@components/ArtworksList/interfaces";
import { useEffect, useState } from "react";

import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import { ISessionStorageData } from "@/interfaces/ISessionStorageData";
import { getFavorite, getSpecials } from "@/utils/requests";

const ArtworksList = ({ type }: IArtworksListProps): JSX.Element => {
  const [gallery, setGallery] = useState<IArtworkBriefInfo[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<ISessionStorageData[]>([]);

  useEffect(() => {
    if (type === "recommendations") {
      getSpecials(25, 9).then((res) => {
        setGallery(res.data);
      });
    } else {
      const favoriteArtworksIds = JSON.parse(
        sessionStorage.getItem("favorites"),
      );
      if (!favoriteArtworksIds) {
        return;
      }

      setFavoriteIds(favoriteArtworksIds);
    }
  }, [type]);

  useEffect(() => {
    if (!favoriteIds || favoriteIds.length === 0) {
      return;
    }

    getFavorite(favoriteIds).then((result) => {
      setGallery(result.data);
    });
  }, [favoriteIds]);

  return (
    <ul className="artworks-list-wrapper">
      {gallery &&
        gallery.map((card: IArtworkBriefInfo) => (
          <ArtworkCardCompact
            key={card.id}
            id={card.id}
            title={card.title}
            artist_title={card.artist_title}
            is_public_domain={card.is_public_domain}
            image_id={card.image_id}
          />
        ))}
    </ul>
  );
};

export default ArtworksList;
