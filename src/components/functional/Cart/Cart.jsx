import React from "react";
import { useSelector } from "../../../storageCustom/index";

export const Cart = () => {
  const cart = useSelector((state) => Object.entries(state));
  return (
    <ul>
      {cart.map(([name, count]) => (
        <li>
          {name} : {count}
        </li>
      ))}
    </ul>
  );
};
