import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Restaurant } from '../../functional/Restaurant/Restaurant'
import { Cart } from '../../functional/Cart/Cart'
import { RestaurantTabs } from '../../containers/restaurantContainer'
import { selectRestaurantIds } from '../../../store/restaurant/selector'

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds)
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0])

  return (
    <div className="restaurant_layout">
      <RestaurantTabs
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      <Cart />
    </div>
  )
}
