import React from "react";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.restaurant_content}>
      <div className={styles.restaurant_content_title}>{name}</div>
      {menu.length && <Menu menu={menu} />}
      {reviews.length && <Reviews reviews={reviews} />}
    </div>
  );
};
