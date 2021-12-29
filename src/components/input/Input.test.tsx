import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input Test', () => {
  it('able to click button', () => {
    const inputTestId = 'inputTest';
    const { getByTestId } = render(<Input value={'test'} onChange={() => true} id={inputTestId} />);

    const inputObject = getByTestId(inputTestId);
    //expect(inputObject).toBeEnabled();

    fireEvent.click(inputObject);
  });
});
