import React from 'react';

import cls from './Loader.scss';

const Loader = () => {
  const { cubeLoader, caption, cube, loader1, loader2, loader3, loader4 } = cls;
  return (
    <div id={cubeLoader}>
      <div className={caption}>
        <div className={cubeLoader}>
          <div className={[cube, loader1].join(' ')}></div>
          <div className={[cube, loader2].join(' ')}></div>
          <div className={[cube, loader4].join(' ')}></div>
          <div className={[cube, loader3].join(' ')}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
