import styled from 'styled-components';
import { Link } from 'components/SharedLayout/SharedLayout.styled';

export const MovieImage = styled.img`
  margin-right: 20px;
  width: 350px;
  height: min-content;
`;

export const MovieDetailsBox = styled.div`
  display: flex;
`;

export const Popularity = styled.div`
  margin-bottom: 50px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Info = styled.span`
  margin-bottom: 30px;
`;

export const AdditionalInfo = styled.div`
  margin-top: 15px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const ListItem = styled.li`
  display: flex;
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  &:hover {
    text-decoration: underline;
  }
`;
