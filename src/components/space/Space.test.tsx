import { render } from '@testing-library/react';
import { Space } from './Space';

describe('Space Test', () => {
  it('able to click button', () => {
    const inputTestId = 'inputTest';
    const { getByTestId } = render(<Space />);
  });
});
