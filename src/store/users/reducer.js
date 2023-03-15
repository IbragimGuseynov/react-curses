import { users } from "../../components/constants/data";

const initialState = {
  entities: users.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: users.map(({ id }) => id),
};

export const usersReducer = (state = initialState, action) => state;
