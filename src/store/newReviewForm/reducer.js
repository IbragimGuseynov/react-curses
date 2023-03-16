export const initialValue = {
  name: "",
  text: "",
  rating: 0,
};

export const newReviewActions = {
  setName: 'setName',
  setText: 'setText',
  setRating: 'setRating'
} 

export const reducer = (state, action) => {
  switch (action.type) {
    case newReviewActions.setName: {
      return { ...initialValue, name: action.payload };
    }
    case newReviewActions.setText: {
      return { ...state, text: action.payload };
    }
    case newReviewActions.setRating: {
      return { ...state, rating: action.payload };
    }
    default:
      return state;
  }
};