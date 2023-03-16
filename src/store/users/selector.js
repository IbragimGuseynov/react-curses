export const selectUserModule = (state) => state.users;

export const selectUserById = (state, { userId }) => {
  return selectUserModule(state).entities[userId];
};

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUsers = (state) => {
  return Object.values(selectUserModule(state).entities);
};
