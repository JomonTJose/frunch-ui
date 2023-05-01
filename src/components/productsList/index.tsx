import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ProductsApi } from '../../apis/products.api';
import { IRestaurant } from '../../models/restaurant.model';
import './productsList.css';
import { IProduct } from './products.model';
import { Divider } from '@mui/material';
import RestaurantCard from '../restaurantsList/restaurantCard';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ProductCard from './productCard/productCard';
import Layout from '../Layout/Layout';
import useRestaurants from '../../hooks/useRestaurants';

const Products = () => {
    let state = useLocation().state;
    let restaurant: IRestaurant = state?.restaurant;
    const [products, setProducts] = useState<IProduct[]>([]);
    const productapi = new ProductsApi();
    const fetchProduct = async () => {
        const product: IProduct[] = await productapi.getProducts(restaurant.id);
        console.log(product);
        setProducts(product);
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    return (

        <div className='max-width'>
            <div className='restaurant-section'>
                <img
                    src={restaurant.res_image}
                    alt={restaurant.restaurant_name}
                    className='image-section'
                />
                <div className='restaurant-name'>{restaurant.restaurant_name}</div>
            </div>
            <div className='products-section'>

                {products.map((product) => {
                    return (
                        <ProductCard product={product} />
                    )
                })}
            </div>
        </div>

    )
}

export default Products;
