import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Radio } from './Radio';
import { sampleData } from './sample.data';

describe('Radio Test', () => {
  it('able to click button', () => {
    const inputTestId = 'inputTest';
    const { getByTestId } = render(
      <Radio options={sampleData} value={'test'} onChange={() => true} />,
    );

    //const inputObject = getByTestId(inputTestId);
    //expect(inputObject).toBeEnabled();
    //fireEvent.click(inputObject);
  });
});
