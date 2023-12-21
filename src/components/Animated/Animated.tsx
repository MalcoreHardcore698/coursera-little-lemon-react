import { motion } from 'framer-motion';

import { FADE, SLIDE_DOWN } from './const';
import type { TAnimated } from './types';

const Animated: TAnimated = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

Animated.Fade = props => <Animated {...FADE} {...props} />;
Animated.SlideDown = props => <Animated {...SLIDE_DOWN} {...props} />;

export default Animated;
