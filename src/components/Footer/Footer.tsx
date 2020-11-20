import React from 'react';

import cls from './Footer.scss';

const Footer = () => {
  return (
    <div className={cls.Container}>
      <span className={cls.netflix}>netflix</span>
      <span>roulette</span>
    </div>
  );
};

export default Footer;
