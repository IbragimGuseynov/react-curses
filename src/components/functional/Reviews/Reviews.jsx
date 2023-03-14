import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_title}>Reviews</div>
      <div className={styles.reviews_content}>
        {reviews.map(
          (review) =>
            !!review && (
              <Review key={review.id} review={review} />
            )
        )}
      </div>
      <NewReviewForm />
    </div>
  );
};
