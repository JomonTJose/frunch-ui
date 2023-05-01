import { useContext } from "react";
import RestaurantContext, { UseRestaurantsContextType } from '../context/RestaurantsProvider';

const useRestaurants = (): UseRestaurantsContextType => {
    return useContext(RestaurantContext)
}

export default useRestaurants;