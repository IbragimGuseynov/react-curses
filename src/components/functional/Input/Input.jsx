import React from "react";
import styles from './styles.module.css'

export const Input = ({ onChange, label, value }) => {
  return (
    <div className={styles.input}>
      <div className={styles.input_label}>{label}</div>
      <input
        className={styles.input_content}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
