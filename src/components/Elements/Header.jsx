import React from "react";
import { Link } from "react-router-dom";
import classes from "./Elements.module.css";

const Header = () => {
  return (
    <header>
      <h2 className={classes.title}>Meal Planner</h2>
      <nav>
        <Link to="/">
          <button className={classes.linkBtn}> Home</button>
        </Link>
        <Link to="/Calendar">
          <button className={classes.linkBtn}> Calendar</button>
        </Link>
        <Link to="/GroceryList">
          <button className={classes.linkBtn}> Grocery List</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
