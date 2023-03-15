import React from "react";
import { SIZE } from "../../constants/sizes";
import { Rating } from "../Rating/Rating";
import { useSelector } from "react-redux";
import { selectUserById } from "../../../store/users/selector";

import styles from "./styles.module.css";

export const Review = ({ review }) => {

  const { userId, text, rating } = review;
  
  const user = useSelector((state) =>
    selectUserById(state, { userId })
  );

  if (!review) {
    return null;
  }

  return (
    <div className={styles.review}>
      <div className={styles.review_half}>
        <Rating className={styles.review_rating} value={rating} size={SIZE.s} />
        <div className={styles.review_title}>{user.name }</div>
      </div>
      <div className={styles.review_half}>
        <div className={styles.review_content}>{text}</div>
      </div>
    </div>
  );
};
