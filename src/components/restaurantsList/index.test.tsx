import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IRestaurant } from '../../models/restaurant.model';
import RestaurantsList from './index';
const mockedUsedNavigate = jest.fn();

describe('RestaurantsList component', () => {
    const restaurantList: IRestaurant[] = [
        {
            id: 1,
            restaurant_name: 'Restaurant 1',
            address: '123',
            average_rating: 4,
            cuisine_name: 'abc',
            location: { x: 123, y: 234 },
            res_image: '123.png',
            review: 'avg'
        },
    ];

    it('should render filters and restaurants', () => {

        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom') as any,
            useNavigate: () => mockedUsedNavigate,
        }));
        render(
            <MemoryRouter>
                <RestaurantsList list={restaurantList} />
            </MemoryRouter>);

        // Check if filters list is displayed
        const filtersList = screen.getByText('Cuisines');
        expect(filtersList).toBeInTheDocument();

        // Check if restaurants list is displayed
        const restaurantCards = screen.getByTestId('TuneRoundedIcon');
        expect(restaurantCards).toBeInTheDocument();
    });
});
