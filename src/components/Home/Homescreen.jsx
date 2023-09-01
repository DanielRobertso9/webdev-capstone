import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import RecipesContainer from "../Recipes/RecipesContainer";
const {REACT_APP_RAPIDAPI_KEY} = process.env


const Homescreen = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
        params: {number: '100'},
        headers: {
          'X-RapidAPI-Key': REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

    axios
      .request(options)
      .then(function (response) {
        setRecipes(response.data.recipes);
        // console.log(response.data.recipes);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
if (recipes.length === 0) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
      <Banner recipes= {recipes}/>
      <RecipesContainer recipes={recipes} />
    </div>
  );
};
}

export default Homescreen;
