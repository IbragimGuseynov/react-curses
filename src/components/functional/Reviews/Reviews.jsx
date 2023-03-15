import React from "react";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";
import { useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../../store/restaurant/selector";
import { selectReviewsByRestaurant } from "../../../store/reviews/selector";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ restaurantId }) => {
  const reviewsIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  );
  const reviews = useSelector((state) =>
    selectReviewsByRestaurant(state, { reviewsIds })
  );

  return (
    <div className={styles.reviews}>
      <div className={styles.reviews_title}>Reviews</div>
      <div className={styles.reviews_content}>
        {reviews.map(
          (review) => !!review && <Review key={review.id} review={review} />
        )}
      </div>
      <NewReviewForm />
    </div>
  );
};
