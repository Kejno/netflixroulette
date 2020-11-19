import React from 'react';
import { tabSortOptions } from '../../constants/mainConstants';

interface SelectProps {
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Sort: React.FC<SelectProps> = ({ onChange }) => {
  const { sort } = tabSortOptions;

  return (
    <select style={{ padding: '5px' }} name="calc" onChange={onChange}>
      {sort.map((opts: string, key: number) => (
        <option value={opts} key={key}>
          {opts}
        </option>
      ))}
    </select>
  );
};

export default Sort;
