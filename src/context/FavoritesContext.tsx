import { createContext } from "react";

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (recipeId: string) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
}

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined);

export default FavoritesContext;