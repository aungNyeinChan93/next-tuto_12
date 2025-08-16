import Link from "next/link";
import React from "react";

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard"; // strict enum-like type
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

const getRecipes = async (): Promise<Array<Recipe>> => {
  const response = await fetch(`https://dummyjson.com/recipes`);
  const { recipes } = await response.json();
  return recipes;
};

const RecipesPage = async () => {
  const recipes: Recipe[] = await getRecipes();
  return (
    <React.Fragment>
      <main className="min-h-screen w-[300px] mx-auto">
        {recipes &&
          Array.isArray(recipes) &&
          recipes?.map((r) => (
            <div key={r.id} className="py-2 my-2 px-10 bg-slate-900 rounded-md">
              <Link href={{ pathname: `/tests/recipes/${r.id}` }}>
                {r.name}
              </Link>
            </div>
          ))}
      </main>
    </React.Fragment>
  );
};

export default RecipesPage;
