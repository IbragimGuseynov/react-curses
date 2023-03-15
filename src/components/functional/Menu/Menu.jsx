import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../../store/restaurant/selector";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";

export const Menu = ({ restaurantId }) => {
  const dishesIds = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );

  return (
    <div className={styles.menu}>
      <div className={styles.menu_title}>Menu</div>
      <div className={styles.menu_content}>
          {dishesIds.map((dishId) => (
              <Dish key={dishId} dishId={dishId} />
          ))}
      </div>
    </div>
  );
};
