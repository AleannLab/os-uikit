import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiSun } from 'react-icons/hi';

import { Button } from '.';

describe('Button Component', () => {
  afterEach(cleanup);

  it('should be able to render a button', () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button-element')).toBeTruthy();
  });

  it('should be able to render a pill button', () => {
    const { getByTestId } = render(<Button pill />);
    expect(getByTestId('button-element').className).toContain('rounded-full');
  });

  it('should be able to render an icon button', () => {
    const { getByTestId } = render(<Button iconName="Filter" />);
    expect(getByTestId('button-element').children[0].children.length).toEqual(1);
    expect(getByTestId('button-element').children[0].children[0].tagName).toEqual('svg');
  });

  it('should be clickable', (done) => {
    const { getByTestId } = render(<Button onClick={() => done()}>Click me</Button>);
    userEvent.click(getByTestId('button-element'));
  });
});
