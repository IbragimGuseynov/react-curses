import React from "react";
import { useSelector } from "react-redux";
import { selectCartEntries } from "../../../store/cart/selector";
import styles from "./styles.module.css";

export const Cart = () => {
  const cart = useSelector(selectCartEntries);
  return (
    <div className={styles.cart_content}>
      {cart.map(([name, count]) => (
        <div key={`${name}+${count}`} className={styles.cart_item}>
          <div className={styles.cart_item_name}>{name}</div>
          :
          <div className={styles.cart_item_count}>{count}</div>
        </div>
      ))}
    </div>
  );
};
