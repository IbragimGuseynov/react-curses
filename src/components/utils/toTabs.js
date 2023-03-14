export const restaurantsToTabs = (restaurants) =>
    restaurants.map(({ name, id }) => ({ title: name, forKey: id }));
