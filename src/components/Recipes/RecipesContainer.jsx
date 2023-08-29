import { useState } from "react";
import RecipesCard from "./RecipesCard";
import { BiSearch, BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import classes from "./Recipes.module.css";

const RecipesContainer = ({ recipes }) => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(search.toLowerCase());
  });

  const [startingcount, setstartingcount] = useState(0);
  const [endingcount, setendingcount] = useState(20);

  const nextPage = () => {
    if (endingcount < recipes.length) {
      setstartingcount(startingcount + 20);
      setendingcount(endingcount + 20);
    }
  };

  const previousPage = () => {
    if (startingcount > 0) {
      setstartingcount(startingcount - 20);
      setendingcount(endingcount - 20);
    }
  };

  return (
    <div className={classes.recipe_section}>
      <div className={classes.search_bar}>
        <BiSearch />
        <input
          type="text"
          placeholder="Search Recipes"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={classes.recipe_container}>
        {filteredRecipes.slice(startingcount, endingcount).map((recipe) => {
          return <RecipesCard recipe={recipe} key={recipe.id} />;
        })}
      </div>
      <div className={classes.PG_Buttons}>
        <BiSolidLeftArrow />{" "}
        <h4 className={classes.previous} onClick={previousPage}>
          Previous
        </h4>
        <h4 className={classes.next} onClick={nextPage}>
          Next
        </h4>{" "}
        <BiSolidRightArrow />
      </div>
    </div>
  );
};

export default RecipesContainer;
