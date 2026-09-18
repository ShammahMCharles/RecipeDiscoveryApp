import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { CategoryResponse } from "../types/recipes";

function Home() {
  const { data, loading, error } = useFetch<CategoryResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  console.log(data);

  return (
    <div className="container mt-4">
      <h1>Recipe Discovery</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {data && (
        <div className="row">
          {data.categories.map((category) => (
            <div className="col-md-4 col-lg-3 mb-4" key={category.idCategory}>
              <Link
                to={`/category/${category.strCategory}`}
                className="text-decoration-non text-dark"
              >
                <div className="card h-100">
                  <img
                    src={category.strCategoryThumb}
                    className="card-img-top"
                    alt={category.strCategory}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{category.strCategory}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
