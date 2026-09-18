import { type ReactNode } from "react";
import FavoritesContext from "./FavoritesContext";
import useLocalStorage from "../hooks/useLocalStorage";

interface FavoritesProviderProps {
  children: ReactNode;
}

function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useLocalStorage<string[]>(
    "favorites",
    []
  );

  const addFavorite = (recipeId: string) => {
    setFavorites((currentFavorites) => [
      ...currentFavorites,
      recipeId,
    ]);
  };

  const removeFavorite = (recipeId: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((id) => id !== recipeId)
    );
  };

  const isFavorite = (recipeId: string) => {
    return favorites.includes(recipeId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;