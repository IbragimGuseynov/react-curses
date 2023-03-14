import React from "react";
import { Dish } from "../Dish/Dish";
import styles from "./styles.module.css";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_title}>Menu</div>
      <div className={styles.menu_content}>
          {menu.map((dish) => (
              <Dish key={dish.id} dish={dish} />
          ))}
      </div>
    </div>
  );
};
