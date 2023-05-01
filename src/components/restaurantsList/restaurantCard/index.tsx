import React from 'react'
import { IRestaurant } from '../../../models/restaurant.model'
import './restaurantCard.css';
import { Rating } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Products from '../../productsList';
import { useNavigate } from "react-router-dom";

interface IRestaurantCardProps {
    restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: IRestaurantCardProps) => {

    let navigate = useNavigate();
    const NavigatetoProduct = () => {
        navigate(`/restaurants/${restaurant.id}`, {
            state: { restaurant }
        });
    }
    return (
        <div className='max-width explore-card cur-po' data-testid='res-card' onClick={() => NavigatetoProduct()}>
            <div className='explore-card-cover'>
                <img
                    src={restaurant.res_image}
                    alt={restaurant.restaurant_name}
                    className='explore-card-image'
                />
                {/* <Rating
                    color='green'
                    name="read-only"
                    value={restaurant.average_rating}
                    readOnly /> */}
            </div>
            <div className='res-row'>
                <div className='res-name'>{restaurant.restaurant_name}</div>
                {restaurant.average_rating &&
                    <div className='res-rating absolute-center'>
                        {Math.floor(restaurant.average_rating)}
                        <StarBorderRoundedIcon className='StarBorderRoundedIcon-custom absolute-center' />
                    </div>
                }
            </div>
            <div className='res-row'>
                <span className='res-cuisine'>
                    {restaurant.cuisine_name}
                </span>
            </div>
        </div>
    )
}

export default RestaurantCard