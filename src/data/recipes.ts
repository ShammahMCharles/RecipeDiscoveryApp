export type Recipe = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Spaghetti",
    category: "Italian",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0",
    description: "A simple and delicious spaghetti dinner.",
    ingredients: [
      "Spaghetti",
      "Tomato sauce",
      "Garlic",
      "Olive oil",
      "Parmesan cheese",
    ],
    instructions: [
      "Boil the spaghetti.",
      "Heat the tomato sauce.",
      "Add garlic and olive oil.",
      "Combine the spaghetti with the sauce.",
      "Top with Parmesan cheese and serve.",
    ],
  },

  {
    id: 2,
    title: "Chicken Tacos",
    category: "Mexican",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    description: "Flavorful chicken tacos with fresh toppings.",
    ingredients: [
      "Chicken",
      "Tortillas",
      "Lettuce",
      "Tomatoes",
      "Cheese",
    ],
    instructions: [
      "Cook the chicken.",
      "Cut the chicken into small pieces.",
      "Warm the tortillas.",
      "Add chicken and toppings.",
      "Serve immediately.",
    ],
  },

  {
    id: 3,
    title: "Vegetable Stir Fry",
    category: "Asian",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    description: "A quick stir fry packed with fresh vegetables.",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell peppers",
      "Soy sauce",
      "Rice",
    ],
    instructions: [
      "Chop the vegetables.",
      "Cook the vegetables in a hot pan.",
      "Add soy sauce.",
      "Cook until the vegetables are tender.",
      "Serve over rice.",
    ],
  },
];