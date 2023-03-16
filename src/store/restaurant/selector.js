export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) => {
  return selectRestaurantModule(state).entities[restaurantId];
};

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurants = (state) => {
  return Object.values(selectRestaurantModule(state).entities);
};

export const selectRestaurantMenuById = (state, { restaurantId }) => {
  return selectRestaurantById(state, { restaurantId })?.menu;
};

export const selectRestaurantReviewsById = (state, { restaurantId }) => {
  return selectRestaurantById(state, { restaurantId })?.reviews;
};
