import React, { useEffect, useState } from "react";
import axios from "axios";
import SimilarSlides from "./SimilarSlides";
import classes from "./Recommended.module.css";
import { useParams } from "react-router-dom";
const {REACT_APP_RAPIDAPI_KEY} = process.env

const Recommended = () => {
  const [recommended, setRecommended] = useState([]);
  const params = useParams().id;

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${params}/similar`,
      headers: {
        "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setRecommended(response.data);
        // console.log('Similar:',response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (recommended.length === 0) {
    return null;
  } else {
    return (
      <div className={classes.slide_container}>
        <h1>Similar Recipes</h1>
        <SimilarSlides recommended={recommended} />
      </div>
    );
  }
};

export default Recommended;
