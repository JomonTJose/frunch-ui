import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PreviousArrow from './previousArrow';

describe('PreviousArrow', () => {
    const onClickMock = jest.fn();
    const classNameMock = 'test-class';
    const styleMock = { color: 'red' };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without errors', () => {
        render(<PreviousArrow />);
    });

    it('applies className prop', () => {
        const { container } = render(<PreviousArrow className={classNameMock} />);
        expect(container.firstChild).toHaveClass(classNameMock);
    });

    it('applies style prop', () => {
        const { container } = render(<PreviousArrow style={styleMock} />);
        expect(container.firstChild).toHaveStyle(styleMock);
    });

    it('calls onClick prop when clicked', () => {
        const { container } = render(<PreviousArrow onClick={onClickMock} />);
        fireEvent.click(container.firstChild!);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
