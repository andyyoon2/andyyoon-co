import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.primary};
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  font-family: inherit;
  padding: 0.5em;
  min-width: 180px;
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
