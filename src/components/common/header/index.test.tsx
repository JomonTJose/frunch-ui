import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    it('renders the header logo', () => {
        render
            (
                <MemoryRouter>
                    <Header />
                </MemoryRouter>);
        const logo = screen.getByAltText('Frunch-Logo');
        expect(logo).toBeInTheDocument();
    });


    it('renders the location selector and search bar', () => {
        render
            (
                <MemoryRouter>
                    <Header />
                </MemoryRouter>);
        const locationSelector = screen.getByText('Bangalore');
        expect(locationSelector).toBeInTheDocument();
        const searchInput = screen.getByPlaceholderText('Search for Restaurant, Cuisine or Dish');
        expect(searchInput).toBeInTheDocument();
    });

    it('renders the user profile', () => {
        render
            (
                <MemoryRouter>
                    <Header />
                </MemoryRouter>);
        const profileIcon = screen.getByRole('img');
        expect(profileIcon).toBeInTheDocument();
        const username = screen.getByText('Jomon');
        expect(username).toBeInTheDocument();
    });
});
