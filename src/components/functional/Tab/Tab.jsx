import React from "react";
import { Button } from "../Button/Button";
import styles from './styles.module.css'

export const Tab = ({ onClick, title, isActive }) => {
  return (
    <Button className={styles.tabs_btn} onClick={onClick} disabled={isActive}>
      {title}
    </Button>
  );
};
