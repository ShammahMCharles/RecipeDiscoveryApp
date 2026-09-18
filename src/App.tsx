import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {
  return (

    <BrowserRouter>

      <Navbar />
                     {/*Routes*/}
      <Routes>
        <Route path="/"
         element={<Home/>} 
        />

        <Route
          path="/category/:categoryName"
          element={<Category/>}
        />

        <Route
          path="/recipe/:recipeId"
          element={<RecipeDetail/>}
        />

        <Route
          path="/favorites"
          element={<Favorites/>}
        />

        <Route
          path="/search"
          element={<Search/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;