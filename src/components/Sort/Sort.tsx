import React from 'react';
import { tabSortOptions } from '../../constants/mainConstants';

import cls from './Sort.scss';

interface SelectProps {
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Sort: React.FC<SelectProps> = ({ onChange }) => {
  const { sort } = tabSortOptions;

  return (
    <select className={cls.selectSort} name="calc" onChange={onChange}>
      {sort.map((opts: string, key: number) => (
        <option className={cls.optionSort} value={opts} key={key}>
          {opts.split('_').join(' ').toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default Sort;
