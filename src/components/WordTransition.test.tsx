import React from 'react';
import { render, waitFor } from '@testing-library/react';

import WordTransition from './WordTransition';

it('renders with classname', () => {
  const { getByTestId } = render(
    <WordTransition
      className="test"
      word="test"
      onAnimationComplete={jest.fn()}
    />,
  );

  expect(getByTestId('word-transition')).toHaveClass('test');
});

it('splits word', () => {
  const { getByTestId } = render(
    <WordTransition word="test" onAnimationComplete={jest.fn()} />,
  );

  expect(getByTestId('word-transition').querySelectorAll('span')).toHaveLength(
    4,
  );
});

it('shows an animation', async () => {
  const handleAnimationComplete = jest.fn();

  const { getByTestId } = render(
    <WordTransition
      word="test"
      onAnimationComplete={handleAnimationComplete}
    />,
  );

  expect(getByTestId('word-transition').querySelector('span')).toHaveStyle({
    opacity: 0,
  });

  await waitFor(() => {
    expect(getByTestId('word-transition').querySelector('span')).toHaveStyle({
      opacity: 1,
    });
  });

  await waitFor(() => {
    expect(handleAnimationComplete).toHaveBeenCalled();
  });
});
