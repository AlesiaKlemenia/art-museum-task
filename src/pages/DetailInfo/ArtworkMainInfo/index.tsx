import "./styles.scss";

import { IArtworkMainInfoProps } from "@/pages/DetailInfo/ArtworkMainInfo/interfaces";

const ArtworkMainInfo = ({
  title,
  artistTitle,
  date,
}: IArtworkMainInfoProps): JSX.Element => {
  return (
    <div className="artwork-main-info-wrapper">
      <h2>{title || "Unknown"}</h2>
      <span className="artwork-main-info-artist-title">
        {artistTitle || "Unknown"}
      </span>
      <span className="artwork-main-info-date">{date || "Unknown"}</span>
    </div>
  );
};

export default ArtworkMainInfo;
