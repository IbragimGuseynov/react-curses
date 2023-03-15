import { combineReducers, legacy_createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { restaurantReducer } from "./restaurant/reducer";
import { reviewsReducer } from "./reviews/reducer";
import { dishesReducer } from "./dishes/reducer";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  reviews: reviewsReducer,
  dishes: dishesReducer,
  users: usersReducer
});

export const store = legacy_createStore(rootReducer);

console.log("state", store.getState());
