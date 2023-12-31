import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
`;

export const CardWrapper = styled.li`
  width: fit-content;
  > a {
    text-decoration: none;
  }
`;

export const MovieTitle = styled.h3`
  padding: 4px;
  margin-top: 4px;
  margin-bottom: 0;

  width: fit-content;
  color: black;
  &:hover {
    color: blue;
  }
`;
