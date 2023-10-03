import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 16px;
`;

export const Image = styled.img`
  margin-right: 25px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export const NotFoundMessage = styled.h2`
  display: flex;
  justify-content: center;
`;
