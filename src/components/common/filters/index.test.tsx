import React from 'react';
import { render, screen } from '@testing-library/react';
import Filters, { IFilterProps } from './index';
import { FiltersModel } from '../../../models/Filters';
import FilterItem from './filterItem/index';

const mockElement: JSX.Element = {
    type: 'div',
    props: {
        className: 'mock-class',
        children: 'Mock content'
    },
    key: 'mock-key'
};
describe('Filters', () => {
    const filters: FiltersModel[] = [
        {
            id: 1,
            title: 'Filter 1'
        },
        {
            id: 2,
            title: 'Filter 2',
        },
    ];

    const props: IFilterProps = {
        filtersList: filters,
    };

    it('should render filter items', () => {
        render(<Filters {...props} />);
        filters.forEach((filter) => {
            const filterItem = screen.getByText(filter.title);
            expect(filterItem).toBeInTheDocument();
            expect(filterItem).toHaveClass('filterName');
        });
    });
});
