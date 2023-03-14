import React from "react";
import { SIZE } from "../../constants/sizes";
import { Rating } from "../Rating/Rating";

import styles from "./styles.module.css";

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  const { user, text, rating } = review;
  return (
    <div className={styles.review}>
      <div className={styles.review_half}>
        <Rating className={styles.review_rating} value={rating} size={SIZE.s} />
        <div className={styles.review_title}>{user}</div>
      </div>
      <div className={styles.review_half}>
        <div className={styles.review_content}>{text}</div>
      </div>
    </div>
  );
};
