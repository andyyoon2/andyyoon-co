import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.primary};
  border: none;
  border-radius: 0.4em;
  box-shadow: 0 2px 4px ${({theme}) => theme.mediumGray};
  font-family: inherit;
  padding: 0;
  transition: all ease-out 0.24s;
  :hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px ${({theme}) => theme.lightGray};
  }
  // Allow inner content to fill the button. Useful for links
  > * {
    padding: 1em 2em;
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
