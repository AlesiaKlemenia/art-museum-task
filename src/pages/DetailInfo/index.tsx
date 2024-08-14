import "./styles.scss";

import Layout from "@components/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getImageUrl } from "@/constants/url";
import { IArtworkFullInfo } from "@/interfaces/IArtworkFullInformation";
import ArtworkDetailImage from "@/pages/DetailInfo/ArtworkDetailImage";
import ArtworkMainInfo from "@/pages/DetailInfo/ArtworkMainInfo";
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
            <ArtworkMainInfo
              title={artworkDetailInfo.data.title}
              artistTitle={artworkDetailInfo.data.artist_title}
              date={artworkDetailInfo.data.date_display}
            />
            <ArtworkOverview
              nacionality={artworkDetailInfo.data.place_of_origin}
              dimensions={artworkDetailInfo.data.dimensions}
              creditLine={artworkDetailInfo.data.credit_line}
              isPublic={artworkDetailInfo.data.is_public_domain}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DetailInfo;
