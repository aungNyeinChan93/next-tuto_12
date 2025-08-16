import Image from "next/image";
import { redirect } from "next/navigation";
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

interface Props {
  params: Promise<{ recipeId: string }>;
}

const getRecipe = async (id: string | number): Promise<Recipe> => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await response.json();
  return recipe;
};

const DetailRecipe = async ({ params }: Props) => {
  const { recipeId } = await params;
  const recipe = await getRecipe(Number(recipeId));

  if (Number(recipeId) > 100) redirect("/tests/recipes");

  return (
    <React.Fragment>
      <main className=" w-full min-h-screen flex justify-center items-center">
        {recipe && (
          <>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={500}
              height={500}
              className=" object-contain rounded-2xl"
            />
          </>
        )}
      </main>
    </React.Fragment>
  );
};

export default DetailRecipe;
