export const selectDishModule = (state) => state.dishes;

export const selectDishById = (state, { dishId }) =>
  selectDishModule(state).entities[dishId];

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishes = (state) =>
  Object.values(selectDishModule(state).entities);

export const selectDishesByMenu = (state, { dishesIds }) =>
  Object.values(selectDishModule(state).entities).filter((item) =>
    dishesIds.includes(item.id)
  );
