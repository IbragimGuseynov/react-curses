export const restaurantsToTabs = (restaurants) =>
    restaurants.map(({ name }) => ({ title: name }));
