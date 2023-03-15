import { restaurants } from "../../components/constants/data";

const initialState = {
  entities: restaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: restaurants.map(({ id }) => id),
};

export const restaurantReducer = (state = initialState, action) => state;
