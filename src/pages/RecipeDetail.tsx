import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { RecipeDetailResponse } from "../types/recipes";
import useFavorites from "../context/useFavorites";

function RecipeDetail() {
  const { recipeId } = useParams<{ recipeId: string }>();

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

  const { data, loading, error } = useFetch<RecipeDetailResponse>(url);

  const recipe = data?.meals?.[0];

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(recipeId ?? "");

  return (
    <div className="container mt-4">
      {loading && <p>Loading recipe...</p>}

      {error && <p>Error: {error}</p>}

      {recipe && (
        <>
          <h1>{recipe.strMeal}</h1>

          <button
            onClick={() => {
              if (favorite) {
                removeFavorite(recipeId!);
              } else {
                addFavorite(recipeId!);
              }
            }}
            className={`btn ${favorite ? "btn-danger" : "btn-primary"}`}
          >
            {favorite ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
          </button>

          <div className="row mt-4">
            <div className="col-md-6">
              <img
                src={recipe.strMealThumb}
                className="img-fluid rounded"
                alt={recipe.strMeal}
              />
            </div>

            <div className="col-md-6">
              <h3>Recipe Information</h3>

              <p>
                <strong>Category:</strong> {recipe.strCategory}
              </p>

              <p>
                <strong>Area:</strong> {recipe.strArea}
              </p>

              <h3 className="mt-4">Instructions</h3>

              <p>{recipe.strInstructions}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
