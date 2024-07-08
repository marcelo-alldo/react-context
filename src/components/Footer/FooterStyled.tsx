import { styled } from 'styled-components';

const FooterStyled = styled.footer`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  color: white;
`;

export default FooterStyled;
