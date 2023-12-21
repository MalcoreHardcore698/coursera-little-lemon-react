import type { MotionProps } from 'framer-motion';

export const FADE: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const SLIDE_DOWN: MotionProps = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
};
