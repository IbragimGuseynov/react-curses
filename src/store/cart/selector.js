export const selectCartModule = (state) => state.cart;

export const selectDishCount = (state, { dishName }) => {
  return selectCartModule(state)[dishName] || 0;
}

export const selectCartEntries = (state) => {
  return Object.entries(selectCartModule(state));
}
