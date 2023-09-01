import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import SlideShow from "./SlideShow";
import RecipesCard from "../Recipes/RecipesCard";
const {REACT_APP_RAPIDAPI_KEY} = process.env

const SimilarSlides = ({ recommended }) => {
  const [recipes, setRecipes] = useState([]);
  const [cards, setCards] = useState([{ key: "", content: "" }]);

  const recipeIds = recommended.map((element) => {
    return element.id;
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

  useEffect(() => {
    const card = recipes.map((element) => {
      return {
        key: element.id,
        content: <RecipesCard recipe={element} />,
      };
    });
    setCards(card);
  }, [recipes]);

  if (cards.length === 0) {
    return null;
  } else {
    return (
      <Fragment>
        <SlideShow
          cards={cards}
          height="500px"
          width="80%"
          margin="0 auto"
          offset={4}
          showArrows={false}
        />
      </Fragment>
    );
  }
};

export default SimilarSlides;
