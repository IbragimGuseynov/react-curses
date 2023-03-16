const initialState = {}

export const cartActions = {
  increment: 'increment',
  decrement: 'decrement'
} 

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.increment: {
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] + 1 : 1,
      }
    }
    case cartActions.decrement: {
      return {
        ...state,
        [action.payload]:
          state[action.payload] !== 0 ? state[action.payload] - 1 : 0,
      }
    }
    default:
      return state
  }
}
