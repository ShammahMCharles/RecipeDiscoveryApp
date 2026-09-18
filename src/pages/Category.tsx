import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { MealResponse } from "../types/recipes";
import RecipeCard from "../components/RecipeCard";

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
    categoryName ?? "",
  )}`;

  const { data, loading, error } = useFetch<MealResponse>(url);

  return (
    <div className="container mt-4">
      <h1>{categoryName} Recipes</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data?.meals && (
        <div className="row">
          {data.meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}

      {data && <p>No recipes found for this category.</p>}
    </div>
  );
}

export default Category;
