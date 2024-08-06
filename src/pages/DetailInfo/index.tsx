import "./styles.scss";

import Layout from "@components/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getImageUrl } from "@/constants/url";
import { IArtworkFullInfo } from "@/interfaces/IArtworkFullInformation";
import ArtworkDetailImage from "@/pages/DetailInfo/ArtworkDetailImage";
import ArtworkOverview from "@/pages/DetailInfo/ArtworkOverview";
import { getArtworkDetailInfo } from "@/utils/requests";

const DetailInfo = (): JSX.Element => {
  const { id } = useParams();
  const [artworkDetailInfo, setArtworkDetailInfo] =
    useState<IArtworkFullInfo>();

  useEffect(() => {
    if (!id) {
      return;
    }
    getArtworkDetailInfo(id).then((res) => {
      setArtworkDetailInfo(res);
    });
  }, [id]);

  return (
    <Layout>
      {artworkDetailInfo && (
        <div className="detail-info-wrapper">
          <ArtworkDetailImage
            id={artworkDetailInfo.data.id}
            imageId={artworkDetailInfo.data.image_id}
            imageSrc={getImageUrl(artworkDetailInfo.data.image_id)}
            title={artworkDetailInfo.data.title}
          />
          <div className="artwork-detail-info-wrapper">
            <div className="artwork-main-info-wrapper">
              <h2>{artworkDetailInfo.data.title}</h2>
              <span className="artwork-main-info-artist-title">
                {artworkDetailInfo.data.artist_title}
              </span>
              <span className="artwork-main-info-date">
                {artworkDetailInfo.data.date_display}
              </span>
            </div>
            <ArtworkOverview
              nacionality={artworkDetailInfo.data.place_of_origin}
              dimensions={artworkDetailInfo.data.dimensions}
              creditLine={artworkDetailInfo.data.credit_line}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DetailInfo;
