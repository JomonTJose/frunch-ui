import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterItem from './index';
import { FiltersModel } from '../../../../models/Filters';

describe('FilterItem component', () => {
    const filter: FiltersModel = { id: 1, title: 'Filter' };

    it('renders filter name', () => {
        render(<FilterItem filter={filter} />);
        const filterName = screen.getByText(filter.title);
        expect(filterName).toBeInTheDocument();
    });

    // it('calls onClick when clicked', () => {
    //     const handleClick = jest.fn();
    //     render(<FilterItem filter={filter} />);
    //     const filterItem = screen.getByText(filter.title);
    //     userEvent.click(filterItem);
    //     expect(handleClick).toHaveBeenCalledTimes(1);
    // });
});
