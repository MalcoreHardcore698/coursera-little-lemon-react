import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

import { FADE, SLIDE_DOWN } from './const';
import { HTMLProps } from 'react';

type TAnimated = React.FC<MotionProps> & {
  Fade: React.FC<MotionProps & HTMLProps<HTMLDivElement>>;
  SlideDown: React.FC<MotionProps & HTMLProps<HTMLDivElement>>;
};

/**
 * Component with predefined animation sets
 */
const Animated: TAnimated = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

Animated.Fade = props => <Animated {...FADE} {...props} />;
Animated.SlideDown = props => <Animated {...SLIDE_DOWN} {...props} />;

export default Animated;
