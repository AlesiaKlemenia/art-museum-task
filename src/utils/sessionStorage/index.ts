export interface SessionStorage {
  id: number;
  image_id: string;
}

const sessionStorageKey = "favorites";

const getFavorites = (): SessionStorage[] => {
  const favoritesString = sessionStorage.getItem(sessionStorageKey);
  return favoritesString ? JSON.parse(favoritesString) : [];
};

const setFavorites = (favorites: SessionStorage[]): void => {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(favorites));
};

const sessionStorageUtils = {
  getFavorites,
  setFavorites,
} as const;

export default sessionStorageUtils;
