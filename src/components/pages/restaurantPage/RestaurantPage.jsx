import {useState} from "react";
import { restaurantsToTabs } from "../../utils/toTabs"
import { Tabs } from "../../functional/Tabs/Tabs"
import { Restaurant } from "../../functional/Restaurant/Restaurant"
import { Cart } from "../../functional/Cart/Cart"

export const RestaurantPage = ({restaurants}) => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const activeRestaurant = restaurants[activeRestaurantIndex];

    if (! activeRestaurant) {
        return null;
    }

    return (
    <div className="restaurant_layout">
        <Tabs 
            tabs={
                restaurantsToTabs(restaurants)
            }
            activeIndex={activeRestaurantIndex}
            onTabClick={setActiveRestaurantIndex}
        />
        <Restaurant restaurant={activeRestaurant}/>
        <Cart/>
    </div>);
};
