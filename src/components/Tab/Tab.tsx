import React from 'react';
import { tabSortOptions } from '../../constants/mainConstants';

import cls from './Tab.scss';

interface TabProps {
  onChangeTab(key: number): void;
}

const Tab: React.FC<TabProps> = ({ onChangeTab }) => {
  const { tab } = tabSortOptions;

  const { tabItem, tabContainer } = cls;

  return (
    <ul className={tabContainer}>
      {tab.map((opt, key) => (
        <li className={tabItem} key={key} onClick={() => onChangeTab(key)}>
          {opt}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
