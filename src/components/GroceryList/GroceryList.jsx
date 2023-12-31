import React, {useState, useEffect}from "react";
import axios from "axios";
import ListDetail from "./ListDetail";
import classes from "./GroceryList.module.css";
const {REACT_APP_RAPIDAPI_KEY} = process.env

const GroceryList = ({events}) => {
    const [recipes, setRecipes] = useState([]);

    const recipeIds = events.map((element) => {
        return element.ID;
      });
      const recipeIdsString = recipeIds.join(",");

    useEffect(() => {
        const options = {
          method: "GET",
          url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
          params: { ids: recipeIdsString },
          headers: {
            "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
            "X-RapidAPI-Host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          },
        };
    
        axios
          .request(options)
          .then(function (response) {
            setRecipes(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, [recipeIdsString]);

        const recipeIngredients = recipes.map((element) => {
            return element.extendedIngredients;
        });

        const IngredientsName = recipeIngredients.map((element) => {
            return element.map((element) => {
                return element.name;
            });
        });

        const flattenedIngredients = [].concat(...IngredientsName);

    if (recipes.length === 0) {
        return null;
    }
    else { 
    return (
        <div className={classes.list}>
        <ListDetail ingredients={flattenedIngredients}/>    
        </div>
    );
}
}

export default GroceryList;

