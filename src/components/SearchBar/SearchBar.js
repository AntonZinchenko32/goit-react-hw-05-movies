
import {  Form, SearchButton, Input } from './SearchBar.styled.jsx';

export const SearchBar = ({ value, onChange }) => {
  
  return (
    <Form>
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
