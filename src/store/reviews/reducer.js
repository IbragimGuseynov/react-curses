import { reviews } from "../../components/constants/data";

const initialState = {
  entities: reviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: reviews.map(({ id }) => id),
};

export const reviewsReducer = (state = initialState, action) => state;
