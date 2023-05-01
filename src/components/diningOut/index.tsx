import React, { useEffect, useState } from 'react'
import Filters from '../common/filters'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { FiltersModel } from '../../models/Filters';
import TopRestaurants from '../topRestaurants';
import RestaurantsList from '../restaurantsList';
import { RestaurantApi } from '../../apis/restaurant.api';
import { IRestaurant } from '../../models/restaurant.model';
import useRestaurants from '../../hooks/useRestaurants';
import { UseRestaurantsContextType } from '../../context/RestaurantsProvider';

const DiningOut = () => {

    const { restaurants } = useRestaurants();

    return (
        <div className='max-width'>

            <TopRestaurants />
            <RestaurantsList list={restaurants} />
        </div>
    )
}

export default DiningOut