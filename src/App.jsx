import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/index"
import { RestaurantPage } from "./components/pages/restaurantPage/RestaurantPage"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RestaurantPage/>
      </div>
    </Provider>
  );
}

export default App;
