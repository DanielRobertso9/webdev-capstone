import classes from "./Recipes.module.css";
import { Link } from "react-router-dom";

const RecipesCard = ({recipe}) => {
    return (
        <div className={classes.recipeCard}
        style={{
            background: `linear-gradient(
                190deg,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)),
                url(${recipe.image})`,
            backgroundposition: "center",
            backgroundSize: "cover",
            
          }}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}><h4>View Reciept</h4></Link>
        </div>
    );
}

export default RecipesCard;