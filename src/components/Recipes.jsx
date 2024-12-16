import { CircleCheckBig, Timer } from "lucide-react";
import { useState, useEffect } from "react";
import helper from "../utils/helper";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import recipesData from "../data-static/db.json";

function Recipes({ searchTerm }) {
  //   const [recipes, setPosts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  {
    /**  COMMENTED OUT PARTS ARE FOR FETCH USING JSON-SERVER **/
  }

  //   const getData = () => {
  //     var requestOptions = {
  //       method: "GET",
  //       redirect: "follow",
  //     };

  //     fetch("http://localhost:3030/recipes", requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => setPosts(result))
  //       .catch((error) => console.log("error", error));
  //   };

  useEffect(() => {
    //getData();
    setRecipes(recipesData);
  }, []);

  //   const filteredRecipes = recipes.filter(function (recipe) {
  //     return recipe.ingredients.some((ingredient) =>
  //       ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return recipes.length !== 0 ? (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto w-full">
        {filteredRecipes.length !== 0 ? (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <div
                onClick={() => navigate(`/recipes/${recipe.id}`)}
                key={recipe.id}
                className="flex flex-col rounded-md overflow-hidden p-3 relative
              bg-gray-200 dark:bg-[#2f3744] hover:bg-gray-300 hover:dark:bg-[#3a4454] hover:scale-105 cursor-pointer"
              >
                <div className="relative h-52">
                  <img
                    className="rounded-md w-full h-full object-cover"
                    src={recipe.image}
                    alt={recipe.name}
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-white shadow-sm rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm text-slate-500">
                    <Timer size={16} color="black" />
                    {recipe.cooking_time} minutes
                  </div>
                </div>
                <div className="flex mt-1">
                  <p className="font-bold tracking-wide">{recipe.name}</p>
                </div>
                <p className="my-2 text-sm">Ingredients included:</p>

                <div className="flex flex-wrap gap-2 justify-start items-start py-1 px-2 rounded-md">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 rounded-md bg-gray-300 dark:bg-[#2a323d] shadow-md py-1 px-3 "
                    >
                      <CircleCheckBig size={16} color="green" />
                      <span className="text-sm tracking-tighter font-md text-nowrap">
                        {helper.capitalizeWords(ingredient)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center rounded-md  p-3 relative max-w-screen-lg mx-auto
               h-[500px] gap-10"
          >
            <div className="flex flex-col items-center justify-center">
              <p>No Recipes Found!</p>
              <p>Try Searching Again.</p>
            </div>
            <img src="/nodata.svg" alt="No Data" width={250} height={250} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <div
      className="flex flex-col items-center justify-center rounded-md  p-3 relative max-w-screen-lg mx-auto
               h-[500px] gap-10"
    >
      <div className="flex flex-col items-center justify-center">
        <p>Server Error!</p>
        <p>Please Contact Administrator for this Issue.</p>
      </div>
      <img src="/servererror.svg" alt="No Data" width={250} height={250} />
    </div>
  );
}
Recipes.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
export default Recipes;
