import React from "react";
import classes from "./home.module.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  if (props.recipes.length === 0) {
    return null;
  } else {
    const randomRecipe =
      props.recipes[Math.floor(Math.random() * props.recipes.length)];
    // console.log("random: ", randomRecipe);
    return (
      <div
        className={classes.banner_container}
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)),
        url(${randomRecipe.image})`,
          backgroundSize: "cover",
        }}
      >
        <div className={classes.banner_info}>
          <h2>{randomRecipe.title}</h2>
          <Link to={`/recipe/${randomRecipe.id}`}>
            <h3>Try it Out!</h3>
          </Link>
        </div>
      </div>
    );
  }
};

export default Banner;
