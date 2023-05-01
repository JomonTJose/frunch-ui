import React, { ReactElement, useEffect, useState } from 'react'
import NextArrow from '../common/carousel/nextArrow';
import PreviousArrow from '../common/carousel/previousArrow';
import './topRestaurants.css';
import Slider from 'react-slick';
import { RestaurantApi } from '../../apis/restaurant.api';
import { IRestaurant } from '../../models/restaurant.model';
import CollectionItem from '../common/collectionItem';
import useRestaurants from '../../hooks/useRestaurants';
import { UseRestaurantsContextType } from '../../context/RestaurantsProvider';

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
}
const TopRestaurants = () => {

    const { restaurants } = useRestaurants();
    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (restaurants?.length) {
        pageContent = restaurants.map((res): any => {
            return <CollectionItem
                coverImage={res.res_image}
                id={res.id}
                title={res.restaurant_name}
                key={res.id}
                rating={res.average_rating} />
        })
    }
    const content = (
        <div className='top-brands max-Width'>
            <div className='collection-title'>
                Previusly Rated Restaurants by You!!
            </div>
            <Slider {...settings}>
                {pageContent}
            </Slider>
        </div>
    )

    return content;
}

export default TopRestaurants;