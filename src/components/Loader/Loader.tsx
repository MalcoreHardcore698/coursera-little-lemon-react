import React from 'react';
import { motion } from 'framer-motion';

import './Loader.scss';

const Loader: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className='wrapper'
  />
);

export default Loader;
