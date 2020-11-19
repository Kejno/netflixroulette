import React from 'react';

interface FormProps {
  title: string;
  placeholder: string;
  buttonName: string;
  onSubmit(e: React.SyntheticEvent): void;
}

const SearchBar: React.FC<FormProps> = ({
  title,
  placeholder,
  buttonName,
  onSubmit,
}) => {
  return (
    <div>
      <div>{title}</div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder={placeholder} />
        <button type="submit">{buttonName}</button>
      </form>
    </div>
  );
};

export default SearchBar;
