const artMuseumApiUrl = "https://api.artic.edu/api/v1";

export const getArtworkBriefInfo = `${artMuseumApiUrl}/artworks`;
export const getArtworkBySearch = `${artMuseumApiUrl}/artworks/search`;
export const getImageUrl = (image_id: string): string =>
  `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
export const getArtworkFullInfo = (id: string): string =>
  `${artMuseumApiUrl}/artworks/${id}`;
