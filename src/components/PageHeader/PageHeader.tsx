import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr';

import { ROUTES } from 'const';
import Navigation from 'components/Navigation';
import Logo from 'assets/images/logo.jpg';

import { LINKS } from './const';

import './PageHeader.scss';

/**
 * Base header component with predefined links and styles
 */
const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const icon = useMemo(() => {
    if (visible) {
      return (
        <GrClose
          size='20px'
          className='hamburger close-menu'
          onClick={() => setVisible(!visible)}
        />
      );
    }

    return (
      <GrMenu
        size='20px'
        className='hamburger'
        onClick={() => setVisible(!visible)}
      />
    );
  }, [visible]);

  const handleClose = () => setVisible(!visible);

  return (
    <header className='header-container'>
      <NavLink to={ROUTES.ROOT}>
        <img className='header-container__logo' src={Logo} alt='Little Lemon logo' />
      </NavLink>

      <Navigation links={LINKS} isExpanded={visible} onClick={handleClose} />

      <div className='header-container__hamburger' onClick={handleClose}>
        {icon}
      </div>
    </header>
  );
};

export default Header;
