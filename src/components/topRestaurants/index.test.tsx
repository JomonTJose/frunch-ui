import React from 'react';
import { render, screen } from '@testing-library/react';
import TopRestaurants from './index';
import useRestaurants from '../../hooks/useRestaurants';
import { UseRestaurantsContextType } from '../../context/RestaurantsProvider';
import { IRestaurant } from '../../models/restaurant.model';

jest.mock('../../hooks/useRestaurants'); // mock the useRestaurants hook

describe('TopRestaurants component', () => {

    it('should render loading message when no restaurants are available', () => {
        const mockUseRestaurants: UseRestaurantsContextType = {
            restaurants: [], // no restaurants available
        };
        (useRestaurants as jest.Mock).mockReturnValue(mockUseRestaurants);

        render(<TopRestaurants />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('should render restaurants when they are available', () => {
        const mockRestaurants: IRestaurant[] = [
            {
                id: 1,
                res_image: 'https://example.com/image1.jpg',
                restaurant_name: 'Restaurant 1',
                average_rating: 4.5,
                cuisine_name: 'abc',
                location: { x: 123, y: 234 },
                address: '123',
                review: 'avg'
            },
            {
                id: 2,
                res_image: 'https://example.com/image2.jpg',
                restaurant_name: 'Restaurant 2',
                average_rating: 3.5,
                cuisine_name: 'abc',
                location: { x: 123, y: 234 },
                address: '123',
                review: 'avg'
            },
        ];
        const mockUseRestaurants: UseRestaurantsContextType = {
            restaurants: mockRestaurants
        };
        (useRestaurants as jest.Mock).mockReturnValue(mockUseRestaurants);

        render(<TopRestaurants />);

        expect(screen.getByText(/Previusly Rated Restaurants by You!!/i)).toBeInTheDocument();
        expect(screen.getAllByRole('img')).toHaveLength(mockRestaurants.length); // should render all restaurants
    });
});
