import Link from 'next/link';
import styled from 'styled-components';
import { transitionDuration } from '../styles';

const StyledAnchor = styled.a`
  border-bottom: 4px solid ${({theme}) => theme.primary};
  position: relative;
  text-decoration: none;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 4px;
    width: 100%;
    background-color: ${({theme}) => theme.secondary};
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform ${transitionDuration} ease-out;
  }
  &:hover {
    cursor: pointer;
    &&::after {
      transform: scaleX(1);
    }
  }
`;

const YoonLink = ({ href, children, title }) => (
  <Link href={href}>
    <StyledAnchor title={title}>{children}</StyledAnchor>
  </Link>
);

export default YoonLink;
