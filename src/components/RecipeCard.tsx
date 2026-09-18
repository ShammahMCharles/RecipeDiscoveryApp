import { Link } from "react-router-dom";
import type { Meal } from "../types/recipes";

interface RecipeCardProps {
  meal: Meal;
}

function RecipeCard({ meal }: RecipeCardProps) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <Link
        to={`/recipe/${meal.idMeal}`}
        className="text-decoration-none text-dark"
      >
        <div className="card h-100">
          <img
            src={meal.strMealThumb}
            className="card-img-top"
            alt={meal.strMeal}
          />

          <div className="card-body">
            <h5 className="card-title">
              {meal.strMeal}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;