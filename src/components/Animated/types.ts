import type { MotionProps } from 'framer-motion';

export type TAnimated = React.FC<MotionProps> & {
  Fade: React.FC<MotionProps>;
  SlideDown: React.FC<MotionProps>;
};
