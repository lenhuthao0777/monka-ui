import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '../src/button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);
    expect(button).toBe;
  });
});
