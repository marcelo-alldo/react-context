import { styled } from 'styled-components';

const SearchInputStyle = styled.input`
  border-radius: 5px;
  height: 20px;
  width: 100%;
  padding: 5px 40px 5px 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin: 10px 0px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export default SearchInputStyle;
