import React from 'react';
import { TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialLinkedinCircular } from 'react-icons/ti';

import Logo from 'assets/images/logo.png';

import './PageFooter.scss';

/**
 * Base footer component with predefined links and styles
 */
const Footer: React.FC = () => (
  <div className='page-footer'>
    <div className='page-footer__content'>
      <div className='content-logo'>
        <img src={Logo} alt='Little Lemon logo' />
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
      </div>

      <div className='content-container'>
        <div className='content-container__block locations'>
          <h5>LOCATIONS</h5>
          <ul>
            <li>Accra</li>
            <li>Kumasi</li>
            <li>Cape Coast</li>
            <li>Tamale</li>
          </ul>
        </div>

        <div className='content-container__block openings'>
          <h5>OPENING TIMES</h5>
          <ul>
            <li>Mon - Wed: 10:30AM - 12:00AM</li>
            <li>Fri: 12:00PM - 1:00AM</li>
            <li>Sat - Sun: 10:30AM - 12:00AM</li>
          </ul>
        </div>

        <div className='content-container__block contact'>
          <h5>CONTACT US</h5>
          <ul>
            <li>96 Abafom Road, North Ridge - Accra</li>
            <li>
              <a href='tel:+12345678912'>+123 4567 8912</a>
            </li>
            <li>
              <a href='mailto:info@littlelemon.com'>info@littlelemon.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='page-footer__links'>
      <span className='links-copyright'>
        © 2023 Little Lemon Ltd. All rights reserved.
      </span>

      <ul className='links-socials'>
        <li className='links-socials__item'>
          <a href='https://facebook.com'>
            <TiSocialFacebookCircular />
          </a>
        </li>
        <li className='links-socials__item'>
          <a href='https://youtube.com'>
            <TiSocialInstagramCircular />
          </a>
        </li>
        <li className='links-socials__item'>
          <a href='https://linkedin.com'>
            <TiSocialLinkedinCircular />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
