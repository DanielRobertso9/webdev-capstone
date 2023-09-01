import React from "react";
import classes from "./Detail.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiCookingPotFill } from "react-icons/pi";
import {GiHealthPotion} from "react-icons/gi";
import {GrFavorite} from "react-icons/gr";
import axios from "axios";


const RecipeDetailBanner = ({ recipe }) => {
  function addToFavorite() {
    const body = {
      Title: recipe.title,
      ID: recipe.id,
    };
    axios.post("http://localhost:8080/addFavorite", body).then((res) => {
      alert("Added to Favorite");
      console.log(res);
    });
  }

  if (recipe.length === 0) {
    return null;
  } else {
    return (
      <div
        className={classes.recipe_detail_banner}
        style={{
          background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)),
          url(${recipe.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className={classes.recipe_detail_banner_info}>
          <div>
            <div className={classes.info_container}>
              <PiCookingPotFill className={classes.icon}/>
              <div className={classes.info}>
                <p className={classes.info_title}>CATEGORY</p>
                <p className={classes.info_detail}>{recipe.dishTypes[0]}</p>
              </div>
            </div>
            <div className={classes.info_container}>
              <AiOutlineClockCircle className={classes.icon}/>
              <div className={classes.info}>
                <p className={classes.info_title}>TIME</p>
                <p className={classes.info_detail}>
                  {recipe.readyInMinutes} minutes
                </p>
              </div>
            </div>
            <div className={classes.info_container}>
              <GiHealthPotion className={classes.icon}/>
              <div className={classes.info}>
                <p className={classes.info_title}>HEALTH SCORE</p>
                <p className={classes.info_detail}>{recipe.healthScore}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.recipe_detail_banner_title}>
          <h1>{recipe.title}</h1>
          <button onClick={addToFavorite}><GrFavorite className={classes.icon2}/>Add to Favorite</button>
          </div>
      </div>
    );
  }
};

export default RecipeDetailBanner;
