import React from "react";
import { useSelector } from "react-redux";
import { Tabs } from "../functional/Tabs/Tabs";
import { selectRestaurants } from "../../store/restaurant/selector";

export const RestaurantTabs = ({ onTabClick, activeId }) => {
  const restaurants = useSelector(selectRestaurants);

  const restaurantTabs = restaurants.map(({ id, name }) => ({
    id,
    title: name,
  }));
  return (
    <Tabs tabs={restaurantTabs} onTabClick={onTabClick} activeId={activeId} />
  );
};
