import React from 'react';
import { render } from '@testing-library/react';
import CollectionItem, { CollectionItemProps } from './index';

describe('CollectionItem', () => {
    const defaultProps: CollectionItemProps = {
        title: 'Test restaurant',
        id: 1,
        coverImage: 'https://example.com/cover.jpg',
        rating: 4.5,
    };

    it('renders without errors', () => {
        render(<CollectionItem {...defaultProps} />);
    });

    it('displays the title', () => {
        const { getByText } = render(<CollectionItem {...defaultProps} />);
        expect(getByText(defaultProps.title)).toBeInTheDocument();
    });

    it('displays the image', () => {
        const { getByAltText } = render(<CollectionItem {...defaultProps} />);
        expect(getByAltText(defaultProps.title)).toBeInTheDocument();
    });

    it('displays the rating', () => {
        const { getByText } = render(<CollectionItem {...defaultProps} />);
        expect(getByText(`${Math.floor(defaultProps.rating)}`)).toBeInTheDocument();
    });
});
