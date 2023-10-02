import StyledLink from "./BackLink.styled";
import { HiArrowLeft } from "react-icons/hi";

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};