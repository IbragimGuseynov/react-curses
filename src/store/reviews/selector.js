export const selectReviewModule = (state) => state.reviews;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewsByRestaurant = (state, { reviewsIds }) =>
  Object.values(selectReviewModule(state).entities).filter((item) =>
    reviewsIds.includes(item.id)
  );

// export const selectReviewMenuById = (state, { reviewId }) =>
//   selectReviewById(state, { reviewId })?.menu;

// export const selectReviewReviewsById = (state, { reviewId }) =>
//   selectReviewById(state, { reviewId })?.reviews;
