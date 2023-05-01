import { FiltersModel } from '../../models/Filters';
import { IRestaurant } from '../../models/restaurant.model'
import Filters from '../common/filters';
import RestaurantCard from './restaurantCard';
import './restaurantsList.css';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

interface IRestaurantListProps {
    list: IRestaurant[],
}
const FiltersList: FiltersModel[] = [{
    id: 2,
    title: 'Cuisines'
}, {
    id: 3,
    title: 'Ratings'
}
]
const RestaurantsList = ({ list }: IRestaurantListProps) => {
    return (
        <div className='max-width explore-section'>
            <Filters filtersList={FiltersList} />
            <div className='collection-title'>
                All Restaurants in Bengaluru
            </div>
            <div className='explore-grid'>
                {
                    list.map((item) => {
                        return <RestaurantCard data-testid='card-res' restaurant={item} key={item.id} />
                    }
                    )}
            </div>
        </div>
    )
}

export default RestaurantsList