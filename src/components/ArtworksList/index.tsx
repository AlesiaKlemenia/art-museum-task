import "./styles.scss";

import ArtworkCardCompact from "@components/ArtworksList/ArtworkCardCompact";
import { IArtworksListProps } from "@components/ArtworksList/interfaces";
import React, { useEffect, useState } from "react";

import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";
import { getSpecials } from "@/utils/requests";

const ArtworksList = ({ size }: IArtworksListProps): JSX.Element => {
  const [gallery, setGallery] = useState<IArtworkBriefInfo[]>([]);

  useEffect(() => {
    getSpecials(25, size === "small" ? 9 : 18).then((res) => {
      setGallery(res.data);
    });
  }, []);

  return (
    <div className="artworks-list-wrapper">
      {gallery.map((card: IArtworkBriefInfo) => (
        <ArtworkCardCompact
          key={card.id}
          id={card.id}
          title={card.title}
          artist_title={card.artist_title}
          is_public_domain={card.is_public_domain}
          image_id={card.image_id}
        />
      ))}
    </div>
  );
};

export default ArtworksList;
