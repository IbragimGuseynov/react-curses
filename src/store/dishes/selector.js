export const selectDishModule = (state) => state.dishes;

export const selectDishById = (state, { dishId }) => {
  return selectDishModule(state).entities[dishId];
};

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishes = (state) => {
  return Object.values(selectDishModule(state).entities);
};

export const selectDishesByMenu = (state, { dishesIds }) => {
  return Object.values(selectDishModule(state).entities).filter((item) =>
    dishesIds.includes(item.id)
  );
};
