import styled from 'styled-components';

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
