// `src/components/BurgerStack.jsx`
import { useState } from "react";

const BurgerStack = ({stack, removeFromBurger}) => {
    return (
      <ul>
        {stack.map((ingredient, index) => {
          <li key={index} style={{backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(ingredient)}>-</button>
          </li>
        })}
      </ul>
    )
  };
  
  export default BurgerStack;
  