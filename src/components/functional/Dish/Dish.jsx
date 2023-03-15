import React from "react";
import { SIZE, BUTTON_VIEW_VARIANT } from "../../constants/sizes";
import { useDispatch, useSelector } from "react-redux";
import { selectDishCount } from "../../../store/cart/selector";
import { selectDishById  } from "../../../store/dishes/selector.js";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

import styles from "./styles.module.css";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) =>
    selectDishCount(state, { dishName: dish.name })
  );
  const dispatch = useDispatch();
  const increment = () =>
    dispatch({ type: "incrementDish", payload: dish.name });
  const decrement = () =>
    dispatch({ type: "decrementDish", payload: dish.name });

  if (!dish) {
    return null;
  }


  const { name, price, ingredients } = dish;
  return (
    <div className={styles.dish}>
      <div className={styles.dish_half}>
        <div className={styles.actions}>
          <Button
            onClick={decrement}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            disabled={count === 0}
          >
            -
          </Button>
          {count}
          <Button
            onClick={increment}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANT.secondary}
            disabled={count === 6}
          >
            +
          </Button>
        </div>
        <div className={styles.title}>
          <span> {name}</span>-<span> {price}</span>
        </div>
      </div>
      <div className={styles.dish_half}>
        {" "}
        {count > 0 && !!ingredients.length && (
          <div className={styles.ingredients}>
            {" "}
            {ingredients.map((ingredient, id) => (
              <Ingredient key={`${dishId}+${id}`} name={ingredient} />
            ))}{" "}
          </div>
        )}{" "}
      </div>
    </div>
  );
};
