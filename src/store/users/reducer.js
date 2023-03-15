import { users } from "../../components/constants/data";

const initialState = {
  entities: users.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: users.map(({ id }) => id),
};

export const usersReducer = (state = initialState, action) => state;
