# 🍳 Recipe Finder

A React + TypeScript recipe application built as a Per Scholas end-of-chapter Skills-Based Assessment (SBA). The application allows users to browse recipes, view recipe details, search recipes, and manage favorite recipes.

 Technologies Used

* React
* TypeScript
* Vite
* React Router
* Bootstrap
* TheMealDB API
* Context API
* Custom React Hooks
* Local Storage

---

 Project Status

The core application structure and routing have been completed.

### Completed

* [x] React + TypeScript project setup
* [x] Vite development environment
* [x] Bootstrap styling
* [x] React Router setup
* [x] Home page route
* [x] Category route
* [x] Recipe detail route
* [x] Favorites route
* [x] Search route
* [x] Custom `useFetch` hook
* [x] Favorites Context
* [x] Favorites Provider
* [x] Custom `useFavorites` hook
* [x] Local Storage persistence for favorites
* [x] Add favorite functionality
* [x] Remove favorite functionality
* [x] Check whether a recipe is a favorite
* [x] Recipe detail API integration using TheMealDB
* [x] Dynamic recipe IDs using React Router
* [x] Bootstrap-based responsive layout
* [x] Empty Favorites state
* [x] Recipe cards on the Favorites page
* [x] Navigation links between pages

---

 Project Structure

```text
src/
│
├── components/
│   └── ...
│
├── context/
│   ├── FavoritesContext.tsx
│   ├── FavoritesProvider.tsx
│   └── useFavorites.ts
│
├── data/
│   └── recipes.ts
│
├── hooks/
│   ├── useFetch.ts
│   └── useLocalStorage.ts
│
├── pages/
│   ├── Home.tsx
│   ├── Category.tsx
│   ├── RecipeDetail.tsx
│   ├── Favorites.tsx
│   └── Search.tsx
│
├── types/
│   └── recipes.ts
│
├── App.tsx
└── main.tsx
```

---

 Routing

React Router is used to provide navigation between the application's main pages.

| Route                     | Purpose                                  |
| ------------------------- | ---------------------------------------- |
| `/`                       | Home page                                |
| `/category/:categoryName` | Displays recipes for a selected category |
| `/recipe/:recipeId`       | Displays details for a specific recipe   |
| `/favorites`              | Displays saved favorite recipes          |
| `/search`                 | Recipe search page                       |

Dynamic routing is used for both categories and individual recipe IDs.

For example:

```text
/recipe/52772
```

allows the application to retrieve the recipe ID from the URL using `useParams()`.

---

 Favorites System

The application uses React Context API to manage favorite recipes throughout the application.

## Favorites Context

`FavoritesContext.tsx` defines the data and functions available to components:

```ts
interface FavoritesContextType {
  favorites: string[];
  addFavorite: (recipeId: string) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
}
```

The context provides:

* `favorites`
* `addFavorite()`
* `removeFavorite()`
* `isFavorite()`

---

## Favorites Provider

`FavoritesProvider.tsx` manages the actual favorite state.

Favorites are stored using the custom `useLocalStorage` hook:

```ts
const [favorites, setFavorites] = useLocalStorage<string[]>(
  "favorites",
  []
);
```

This allows favorite recipes to remain saved when the page is refreshed.

### Add Favorite

```ts
addFavorite(recipeId)
```

adds a recipe ID to the favorites array.

### Remove Favorite

```ts
removeFavorite(recipeId)
```

removes the selected recipe ID.

### Check Favorite

```ts
isFavorite(recipeId)
```

checks whether a recipe is currently saved as a favorite.

---

 Custom Hooks

The application uses custom hooks to keep reusable logic separate from individual components.

## `useFetch`

The `useFetch` hook is used to retrieve recipe information from an API and manage the associated loading and error states.

It is currently used with TheMealDB API for recipe details.

## `useLocalStorage`

The `useLocalStorage` hook allows React state to be synchronized with the browser's local storage.

This is used by the Favorites Provider so favorite recipes persist between page refreshes.

## `useFavorites`

The `useFavorites` hook provides an easier way for components to access the Favorites Context.

Instead of repeatedly writing:

```ts
useContext(FavoritesContext)
```

components can use:

```ts
const { favorites, addFavorite, removeFavorite, isFavorite } =
  useFavorites();
```

---

# 🍽️ Recipe Details

The Recipe Detail page uses React Router's `useParams()` to retrieve the recipe ID from the URL.

Example:

```ts
const { recipeId } = useParams<{ recipeId: string }>();
```

The recipe ID is then used to request recipe information from TheMealDB.

Example API endpoint:

```text
https://www.themealdb.com/api/json/v1/1/lookup.php?i=RECIPE_ID
```

This allows users to navigate directly to individual recipes.

---

# 💾 Local Storage

Favorites are persisted using browser local storage.

The application stores favorite recipe IDs under:

```text
favorites
```

For example:

```json
["52772", "52959"]
```

This means users do not lose their saved favorites when refreshing the application.

---

 Styling

Bootstrap is currently being used for the application's styling and responsive layout.

Examples of Bootstrap classes used include:

```text
container
row
col-md-4
card
card-body
btn
btn-primary
btn-danger
```

This provides a responsive layout without requiring Tailwind CSS.

---

 Current Application Flow

The current application follows this general flow:

```text
User
 │
 ├── Browse Recipes
 │       ↓
 │    Home Page
 │
 ├── Select Category
 │       ↓
 │    Category Page
 │
 ├── Select Recipe
 │       ↓
 │    Recipe Detail
 │       ↓
 │    TheMealDB API
 │
 ├── Add Recipe to Favorites
 │       ↓
 │    Favorites Context
 │       ↓
 │    Local Storage
 │
 └── View Favorites
         ↓
      Favorites Page
```

---

 Known Limitation

The Favorites page currently uses the local `recipes` data source to display favorite recipe information, while the Recipe Detail page has been updated to retrieve recipes from TheMealDB.

Because of this, the favorite recipe IDs and local recipe IDs may not always correspond.

The Favorites Context itself is functional and correctly stores recipe IDs. The remaining improvement is to make the Favorites page retrieve the full recipe information from TheMealDB using those saved IDs.

---

 Potential Future Improvements

If additional development time is available, the following features could be added or improved:

* [ ] Connect the Favorites page directly to TheMealDB
* [ ] Complete recipe search functionality
* [ ] Complete category filtering
* [ ] Add loading indicators
* [ ] Add API error messages
* [ ] Improve recipe card styling
* [ ] Add favorite buttons directly to recipe cards
* [ ] Prevent duplicate favorite IDs
* [ ] Improve mobile responsiveness
* [ ] Add additional accessibility improvements

---

 Learning Objectives Demonstrated

This project demonstrates several concepts covered during the Per Scholas React curriculum:

* React components
* TypeScript interfaces and types
* Props
* React state
* Custom hooks
* `useEffect`
* Context API
* `createContext`
* `useContext`
* React Router
* Dynamic routes
* URL parameters
* API requests
* Local Storage
* Conditional rendering
* Array methods such as `map()` and `filter()`
* Bootstrap responsive design
* Component-based application architecture

---

Project Purpose

This project was created as part of a Per Scholas Skills-Based Assessment to demonstrate the ability to build a React application using modern front-end development practices.

The project combines React, TypeScript, React Router, Context API, custom hooks, API integration, and persistent client-side state into a single recipe application.
