import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Counter from './Counter';

describe('Counter component', () => {
  it('starts at zero and increments/decrements', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const count = getByTestId('count');
    expect(count.props.children).toBe(0);

    fireEvent.press(getByText('+1'));
    expect(count.props.children).toBe(1);

    fireEvent.press(getByText('-1'));
    expect(count.props.children).toBe(0);
  });
});