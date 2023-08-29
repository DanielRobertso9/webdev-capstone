import React from "react";

const ListDetail = ({ingredients}) => {

const uniqueIngredients = [...new Set(ingredients)];
    return (
        <div>
            <ul>
                {uniqueIngredients.map((ingredient, index) => {
                    return (
                        <li key={index}>
                            {ingredient}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    }

export default ListDetail;