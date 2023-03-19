import React from "react";
import { SIZE } from "../../constants/sizes";
import { useDispatch, useSelector } from "react-redux";
import { selectDishCount } from "../../../store/cart/selector";
import { selectDishById  } from "../../../store/dishes/selector.js";
import { Button, BUTTON_VIEW_VARIANTS } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";
import { cartActions } from "../../../store/cart/reducer"

import styles from "./styles.module.css";

const minCount = 0;
const maxCount = 0;

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) =>
    selectDishCount(state, { dishName: dish.name })
  );
  const dispatch = useDispatch();
  const increment = () =>
    dispatch({ type: cartActions.increment, payload: dish.name });
  const decrement = () =>
    dispatch({ type: cartActions.decrement, payload: dish.name });

  const { name, price, ingredients } = dish;
  return (
    <div className={styles.dish}>
      <div className={styles.dish_half}>
        <div className={styles.actions}>
          <Button
            onClick={decrement}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANTS.secondary}
            disabled={count === minCount}
          >
            -
          </Button>
          {count}
          <Button
            onClick={increment}
            className={styles.action}
            size={SIZE.s}
            viewVariant={BUTTON_VIEW_VARIANTS.secondary}
            disabled={count === maxCount}
          >
            +
          </Button>
        </div>
        <div className={styles.title}>
          <span> {name}</span>-<span> {price}</span>
        </div>
      </div>
      <div className={styles.dish_half}>
        {count > 0 && ingredients.length && (
          <div className={styles.ingredients}>
            {ingredients.map((ingredient, id) => (
              <Ingredient key={`${dishId}+${id}`} name={ingredient} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
