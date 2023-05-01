import React from 'react'
import NextArrow from '../common/carousel/nextArrow'
import PreviousArrow from '../common/carousel/previousArrow'
import Slider from 'react-slick';
import { FoodItems } from './foodItem.model';
import FoodItem from './foodItem';
import './dineinCollections.css';

const foodItems: FoodItems[] = [{
    id: 1,
    title: 'Pizza',
    cover: '/icons/Food/Pizza.png'
},
{
    id: 2,
    title: 'Burgers',
    cover: '/icons/Food/burger.png'
},
{
    id: 3,
    title: 'Fries',
    cover: '/icons/Food/fries.png'
},
{
    id: 4,
    title: 'Noodles',
    cover: '/icons/Food/noodels.png'
}
]

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
}
const FoodCollections = () => {
    return (
        <div className='dinein-collection'>
            <div className='max-width'>
                <div className='collection-title'>
                    Eat what makes you happy!
                </div>
                <Slider {...settings}>
                    {foodItems.map((food): any => {
                        return <FoodItem cover={food.cover} id={food.id} title={food.title} />
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default FoodCollections