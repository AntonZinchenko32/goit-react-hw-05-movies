// import { useState, useEffect } from 'react';
import { SearchBox, Form, SearchButton, Input } from './SearchBar.styled.jsx';

export const SearchBar = ({value, onSubmit }) => {
  // const [value, setValue] = useState('');

  // useEffect(() => {
  //   value && submit(value);
  // }, [value, submit]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const trimmedInputValue = e.currentTarget.elements.searchInput.value.trim();
  //   setValue(trimmedInputValue);
  // };

  return (
    <SearchBox>
      <Form onSubmit={(e) => onSubmit(e.currentTarget.elements.searchInput.value.trim())}>
        <SearchButton type="submit" />
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
          value={value}
        />
      </Form>
    </SearchBox>
  );
};
