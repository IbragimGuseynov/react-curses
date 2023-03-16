export const selectReviewModule = (state) => state.reviews;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviews = (state) => {
  return Object.values(selectReviewModule(state).entities);
};

export const selectReviewsByRestaurant = (state, { reviewsIds }) => {
  return Object.values(selectReviewModule(state).entities).filter((item) =>
    reviewsIds.includes(item.id)
  );
};
