import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../store/restaurant/selector";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurantId }) => {
  
  const restaurant_name = useSelector((state) =>
    selectRestaurantById(state, { restaurantId }).name
  );

  return (
    <div className={styles.restaurant_content}>
      <div className={styles.restaurant_content_title}>{restaurant_name}</div>
      <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />
    </div>
  );
};
