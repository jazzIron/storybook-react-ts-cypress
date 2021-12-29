import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input Test', () => {
  it('able to click button', () => {
    const inputTestId = 'inputTest';
    const [inputTestValue, setInputTestValue] = React.useState<string | number>('');
    const { getByTestId } = render(
      <Input value={inputTestValue} onChange={setInputTestValue} id={inputTestId} />,
    );

    const inputObject = getByTestId(inputTestId);
    expect(inputObject).toBeEnabled();

    fireEvent.click(inputObject);
  });
});
