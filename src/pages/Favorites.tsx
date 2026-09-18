
import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";
import useFavorites from "../context/useFavorites";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(String(recipe.id))
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div className="container py-4">
        <h1>My Favorites</h1>

        <p>You haven't added any favorite recipes yet.</p>

        <Link to="/" className="btn btn-primary">
          Browse Recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">My Favorites</h1>

      <div className="row">
        {favoriteRecipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.title}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {recipe.title}
                </h5>

                <p className="card-text">
                  {recipe.description}
                </p>

                <Link
                  to={`/recipe/${recipe.id}`}
                  className="btn btn-primary me-2"
                >
                  View Recipe
                </Link>

                <button
                  onClick={() =>
                    removeFavorite(String(recipe.id))
                  }
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;