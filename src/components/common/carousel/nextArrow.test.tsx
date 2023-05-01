import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NextArrow from './nextArrow';

describe('NextArrow', () => {
    const onClickMock = jest.fn();
    const classNameMock = 'test-class';
    const styleMock = { color: 'red' };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without errors', () => {
        render(<NextArrow />);
    });

    it('applies className prop', () => {
        const { container } = render(<NextArrow className={classNameMock} />);
        expect(container.firstChild).toHaveClass(classNameMock);
    });

    it('applies style prop', () => {
        const { container } = render(<NextArrow style={styleMock} />);
        expect(container.firstChild).toHaveStyle(styleMock);
    });

    it('calls onClick prop when clicked', () => {
        const { container } = render(<NextArrow onClick={onClickMock} />);
        fireEvent.click(container.firstChild!);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
