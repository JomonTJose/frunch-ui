import React from 'react'
import { IRestaurant } from '../../../models/restaurant.model';
import './collectionItem.css';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export interface CollectionItemProps {
    title: string;
    id: number;
    coverImage: string;
    rating: number;
}


const CollectionItem = ({ title, id, coverImage, rating }: CollectionItemProps) => {
    return (
        <div className='item'>
            <div className='item-cover'>
                <img
                    src={coverImage}
                    alt={title}
                    className="item-image"
                />
                <div className='res-row1'>

                    <div className='item-title'>{title}</div>
                    <div className='res-rating1 absolute-center'>
                        {Math.floor(rating)}
                        <StarBorderRoundedIcon />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default CollectionItem