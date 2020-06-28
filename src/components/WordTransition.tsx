import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

type WordTransitionProps = {
  className?: string;
  word: string;
  onAnimationComplete: () => void;
};

const WordTransition: React.FC<WordTransitionProps> = ({
  className,
  word,
  onAnimationComplete,
}) => (
  <motion.span
    key={word}
    className={classNames(className, 'inline-block')}
    variants={{
      show: {
        transition: {
          staggerChildren: 0.25,
        },
      },
      hide: {},
    }}
    initial="hide"
    animate="show"
    onAnimationComplete={onAnimationComplete}
  >
    {word.split('').map((char, charIndex) => (
      <motion.span
        key={`${word + charIndex}`}
        className="inline-block"
        variants={{
          show: {
            opacity: 1,
            y: 0,
          },
          hide: {
            opacity: 0,
            y: -20,
          },
        }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

export default WordTransition;
