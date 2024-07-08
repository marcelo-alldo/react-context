import { styled } from 'styled-components';

const NavBarStyled = styled.nav`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 7px;
  gap: 10px;
  color: white;
`;

export default NavBarStyled;
