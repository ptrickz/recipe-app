import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Timer, CircleCheckBig } from "lucide-react";
import helper from "../utils/helper";
import Header from "../components/Header";
import recipesData from "../data-static/db.json";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  {
    /**  COMMENTED OUT PARTS ARE FOR FETCH USING JSON-SERVER **/
  }

  useEffect(() => {
    // const fetchRecipe = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:3030/recipes/${id}`);
    //     const data = await response.json();
    //     setRecipe(data); // Set the recipe details
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching recipe details:", error);
    //     setLoading(false);
    //   }
    // };
    const fetchRecipe = () => {
      try {
        const foundRecipe = recipesData.find(
          (recipe) => recipe.id === parseInt(id)
        );
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          console.error("Recipe not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]); // Re-run if the ID changes
  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found!</p>;
  return (
    <div>
      <Header setSearchTerm={null} showSearchBar={false}></Header>
      <div className="p-10 max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-lg mb-4">
          <div className=" bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm w-fit">
            <Timer size={16} />
            Cooking time: {recipe.cooking_time} minutes
          </div>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <div className="flex flex-wrap gap-3 py-5">
          {recipe.ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center gap-1 rounded-md bg-gray-300 dark:bg-[#343e4c] py-1 px-3 "
            >
              <CircleCheckBig size={16} color="green" />
              <span className="text-sm tracking-tighter font-md text-nowrap">
                {helper.capitalizeWords(ingredient)}
              </span>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
        <ul className="list-decimal ml-6 mb-4">
          {recipe.instructions
            .split(".")
            .filter((instruction) => instruction.trim() !== "")
            .map((instruction, index) => (
              <li key={index} className="text-lg">
                {instruction.trim()}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetails;
