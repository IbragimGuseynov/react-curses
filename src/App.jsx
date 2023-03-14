import React from 'react';
import { StoreProvider } from "./storageCustom"
import { store } from "./storageCustom/store"
import { RestaurantPage } from "./components/pages/restaurantPage/RestaurantPage"
import { restaurants } from "./components/constants/restaurants"

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <RestaurantPage restaurants={restaurants} />
      </div>
    </StoreProvider>
  );
}

export default App;
