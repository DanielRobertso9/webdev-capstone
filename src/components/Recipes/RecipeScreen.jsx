import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeDetailBanner from "./Detail/RecipeDetailBanner";
import RecipeDetail from "./Detail/RecipeDetail";
const {REACT_APP_RAPIDAPI_KEY} = process.env

const RecipeScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      headers: {
        "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setRecipe(response.data);
        // console.log('detail ',response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <RecipeDetailBanner recipe={recipe} />
      <RecipeDetail recipe={recipe} />
    </div>
  );
};

export default RecipeScreen;
