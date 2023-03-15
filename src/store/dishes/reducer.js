import { dishes } from "../../components/constants/data";

const initialState = {
  entities: dishes.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: dishes.map(({ id }) => id),
};

export const dishesReducer = (state = initialState, action) => state;
