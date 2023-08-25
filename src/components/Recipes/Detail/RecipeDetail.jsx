import React from "react";
import classes from "./Detail.module.css"

const RecipeDetail = ({ recipe }) => {
    console.log(recipe);

    if (recipe.length === 0) {
        return null;
      } else {
    return (
        <div className={classes.recipe_detail}>
        <div className={classes.recipe_detail_ingredients}>
            <h2>Ingredients</h2>
            <ul>
            {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
            ))}
            </ul>
        </div>
        <div className={classes.recipe_detail_instructions}>
            <h2>Instructions</h2>
            <ol>
            {recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
            ))}
            </ol>
        </div>
        </div>
    );
    };
};

export default RecipeDetail;