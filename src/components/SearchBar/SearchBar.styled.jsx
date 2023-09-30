import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid black;
`;
export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://www.svgrepo.com/show/510181/search.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
