import { createContext, ReactElement, useState, useEffect } from "react"
import { RestaurantApi } from "../apis/restaurant.api";
import { IRestaurant } from "../models/restaurant.model";

const initState: IRestaurant[] = [];
export type UseRestaurantsContextType = { restaurants: IRestaurant[] }
const initContextState: UseRestaurantsContextType = { restaurants: [] }
const restaurantapi = new RestaurantApi();

const RestaurantContext = createContext<UseRestaurantsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const RestaurantsProvider = ({ children }: ChildrenType): ReactElement => {
    const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

    const fetchRestaurants = async () => {
        const restaurants: IRestaurant[] = await restaurantapi.getPrevRatedRestaurants(1);
        setRestaurants(restaurants);
    }


    useEffect(() => {
        fetchRestaurants();
    }, [])

    return (
        <RestaurantContext.Provider value={{ restaurants }}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default RestaurantContext;