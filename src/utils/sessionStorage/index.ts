export interface SessionStorage {
  id: number;
  image_id: string;
}

const getFavorites = (key: string): SessionStorage[] => {
  const favoritesString = sessionStorage.getItem(key);
  return favoritesString ? JSON.parse(favoritesString) : [];
};

const setFavorites = (key: string, favorites: SessionStorage[]): void => {
  sessionStorage.setItem(key, JSON.stringify(favorites));
};

const sessionStorageUtils = {
  getFavorites,
  setFavorites,
} as const;

export default sessionStorageUtils;
