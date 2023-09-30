import { useState, useEffect } from 'react';
import { Form, SearchButton, Input } from './SearchBar.styled.jsx';

export const SearchBar = ({ value, onChange, onSubmit }) => {
  const [valueForSubmit, setValueForSubmit] = useState('');

  useEffect(() => {
    valueForSubmit && onSubmit(valueForSubmit);
  }, [valueForSubmit, onSubmit]);

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedInputValue = e.currentTarget.elements.searchInput.value.trim();
    setValueForSubmit(trimmedInputValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit" />
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="searchInput"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Form>
  );
};
