import React from 'react'
import { FoodItems } from '../foodItem.model';
import './foodItem.css';

const FoodItem = ({ cover, id, title }: FoodItems) => {
    return (
        <div className='food-item'>
            <div className='food-item-cover'>
                <img
                    src={cover}
                    alt={title}
                    className="food-item-image"
                />

            </div>
            <div className='food-item-title'>
                {title}
            </div>
        </div>
    )
}

export default FoodItem