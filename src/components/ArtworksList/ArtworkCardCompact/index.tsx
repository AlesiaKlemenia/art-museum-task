import "./styles.scss";

import AddToFavoritesButton from "@components/AddToFavoritesButton";
import { Link } from "react-router-dom";

import paths from "@/constants/paths";
import { getImageUrl } from "@/constants/url";
import { IArtworkBriefInfo } from "@/interfaces/IArtworkBriefInfo";

const ArtworkCardCompact = ({
  id,
  title,
  artist_title,
  is_public_domain,
  image_id,
}: IArtworkBriefInfo): JSX.Element => {
  const imageURL = getImageUrl(image_id);

  return (
    <Link
      to={`${paths.detail.info.path}${id}`}
      className="compact-card-wrapper"
    >
      <div className="compact-image-wrapper">
        <img src={imageURL} alt={title} />
      </div>
      <div className="compact-artwork-brief-info">
        <span className="compact-artwork-brief-title">{title}</span>
        <span className="compact-artwork-brief-artist-title">
          {artist_title}
        </span>
        <span className="compact-artwork-brief-is-public">
          {is_public_domain ? "Public" : "Not Public"}
        </span>
      </div>
      <AddToFavoritesButton id={id} image_id={image_id} />
    </Link>
  );
};

export default ArtworkCardCompact;
