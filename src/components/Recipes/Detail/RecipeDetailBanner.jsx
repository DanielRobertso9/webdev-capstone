import React from "react";
import classes from "./Detail.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiCookingPotFill } from "react-icons/pi";
import {GiHealthPotion} from "react-icons/gi";


const RecipeDetailBanner = ({ recipe }) => {
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
      </div>
    );
  }
};

export default RecipeDetailBanner;
