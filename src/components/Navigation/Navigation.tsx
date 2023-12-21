import React, { useMemo } from 'react';
import type { ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import cn from 'classnames';

import './Navigation.scss';

export type NavigationLink = {
  path: string;
  title: ReactNode;
  active?: boolean;
};

interface Props {
  links: Array<NavigationLink>;
  isExpanded?: boolean;
  onClick?: (link: NavigationLink) => void;
}

const animateFrom = {
  opacity: 0,
  y: -40,
};

const animateTo = {
  opacity: 1,
  y: 0,
};

/**
 * Base navigation component
 */
const Navigation: React.FC<Props> = ({ links, isExpanded, onClick }) => {
  const menu = useMemo(() => {
    return (
      <motion.ul className='navigation-list' initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
        {links.map((link, index) => (
          <motion.li
            key={link.path}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 + (0.05 * index) }}
            onClick={() => onClick?.(link)}
          >
            <NavLink to={link.path}>
              {link.title}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    )
  }, [links, onClick]);

  return (
    <nav className={cn('navigation', { expanded: isExpanded })}>
      {menu}
    </nav>
  );
};

export default Navigation;
