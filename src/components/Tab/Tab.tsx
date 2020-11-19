import React from 'react';
import { tabSortOptions } from '../../constants/mainConstants';

interface TabProps {
  onChangeTab(key: number): void;
}

const Tab: React.FC<TabProps> = ({ onChangeTab }) => {
  const { tab } = tabSortOptions;
  return (
    <ul>
      {tab.map((opt, key) => (
        <li key={key} onClick={() => onChangeTab(key)}>
          {opt}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
