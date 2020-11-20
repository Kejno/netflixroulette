import React from 'react';
import { tabSortOptions } from '../../constants/mainConstants';

import cls from './Tab.scss';

interface TabProps {
  onChangeTab(key: number): void;
  activeTab: any;
}

const Tab: React.FC<TabProps> = ({ onChangeTab, activeTab }) => {
  const { tab } = tabSortOptions;

  const { tabItem, tabContainer, activeTabItem } = cls;

  return (
    <ul className={tabContainer}>
      {Object.keys(tab).map((opt, key) => {
        const active = Object.values(tab)[key] === activeTab && activeTabItem;

        return (
          <li
            className={[tabItem, active].join(' ')}
            key={key}
            onClick={() => onChangeTab(key)}
          >
            {opt.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
