import styled from 'styled-components';

interface ParagrafoStyledProps {
  dark: boolean;
}

const ParagrafoStyled = styled.div<ParagrafoStyledProps>`
  background-color: ${props => (props.dark ? '#333' : 'aliceblue')};
  color: ${props => (props.dark ? '#fff' : 'dimgray')};
  padding: 30px;
  border-radius: 30px;
  margin-top: 20px;
`;

export default ParagrafoStyled;
