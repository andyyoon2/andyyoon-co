import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.primary};
  border: none;
  border-radius: 0.4em;
  box-shadow: 0 2px 4px ${({theme}) => theme.mediumGray};
  font-family: inherit;
  padding: 1em 2em;
  transition: all ease-out 0.24s;
  :hover {
    translateY(-1px);
    box-shadow: 0 4px 8px ${({theme}) => theme.lightGray};
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
