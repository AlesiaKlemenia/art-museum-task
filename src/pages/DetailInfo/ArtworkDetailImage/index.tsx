import "./styles.scss";

import AddToFavoritesButton from "@components/AddToFavoritesButton";

import { IArtworkDetailImageProps } from "@/pages/DetailInfo/ArtworkDetailImage/interfaces";

const ArtworkDetailImage = ({
  id,
  imageId,
  imageSrc,
  title,
}: IArtworkDetailImageProps): JSX.Element => {
  return (
    <div className="artwork-detail-info-image-wrapper">
      <img className="artwork-detail-info-image" src={imageSrc} alt={title} />
      <AddToFavoritesButton id={id} image_id={imageId} />
    </div>
  );
};

export default ArtworkDetailImage;