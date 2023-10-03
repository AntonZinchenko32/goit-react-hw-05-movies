import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 16px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  border-bottom: 1px black dashed;
`;

export const NotFoundMessage = styled.h2`
  display: flex;
  justify-content: center;
`;
