import React from "react";
import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";

import styles from "./styles.module.css";

export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({ max: 6, initialValue: 1 });

  return (
    <div className={styles.ingredient}>
      <div className={styles.actions}>
        <Button onClick={decrement}>-</Button>
        <div className={styles.actions_count}>{count}</div>
        <Button onClick={increment}>+</Button>
      </div>
      <div className={styles.ingredient_title}>{name}</div>
    </div>
  );
};
