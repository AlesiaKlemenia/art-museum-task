import "./styles.scss";

import AddToFavoritesButton from "@components/AddToFavoritesButton";
import { Link } from "react-router-dom";

import paths from "@/constants/paths";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";

const ArtworkCard = ({
  id,
  title,
  artist_title,
  is_public_domain,
  image_id,
}: IArtworkBriefInfo): JSX.Element => {
  const imageURL = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

  return (
    <Link to={`${paths.detail.info.path}${id}`} className="card-wrapper">
      <div className="image-wrapper">
        <img src={imageURL} alt={title} />
      </div>
      <div className="artwork-brief-info-wrapper">
        <div className="artwork-brief-info">
          <span className="artwork-brief-title">{title}</span>
          <span className="artwork-brief-artist-title">
            {artist_title || "Unknown"}
          </span>
          <span className="artwork-brief-is-public">
            {is_public_domain ? "Public" : "Not Public"}
          </span>
        </div>
        <AddToFavoritesButton id={id} image_id={image_id} />
      </div>
    </Link>
  );
};

export default ArtworkCard;
