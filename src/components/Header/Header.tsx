import React from 'react';

import cls from './Header.scss';

const Header: React.FC = () => {
  return (
    <div className={cls.Container}>
      <span className={cls.netflix}>netflix</span>
      <span>roulette</span>
    </div>
  );
};

export default Header;
