import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import WordTransition from './WordTransition';

it('renders with classname', () => {
  render(
    <WordTransition
      className="test"
      word="test"
      onAnimationComplete={jest.fn()}
    />,
  );

  expect(screen.getByTestId('word-transition')).toHaveClass('test');
});

it('splits word', () => {
  render(<WordTransition word="test" onAnimationComplete={jest.fn()} />);

  expect(
    screen.getByTestId('word-transition').querySelectorAll('span'),
  ).toHaveLength(4);
});

it('shows an animation', async () => {
  const handleAnimationComplete = jest.fn();

  render(
    <WordTransition
      word="test"
      onAnimationComplete={handleAnimationComplete}
    />,
  );

  expect(
    screen.getByTestId('word-transition').querySelector('span'),
  ).toHaveStyle({
    opacity: 0,
  });

  await waitFor(() => {
    expect(
      screen.getByTestId('word-transition').querySelector('span'),
    ).toHaveStyle({
      opacity: 1,
    });
  });

  await waitFor(() => {
    expect(handleAnimationComplete).toHaveBeenCalled();
  });
});
