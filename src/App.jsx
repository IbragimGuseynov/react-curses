import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/index"
import { RestaurantPage } from "./components/pages/restaurantPage/RestaurantPage"
import { restaurants } from "./components/constants/data"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RestaurantPage restaurants={restaurants} />
      </div>
    </Provider>
  );
}

export default App;
