import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { transitionDurationEasing } from '../styles';

const padding = '2rem';
const fontSize = '28px';
const iconSize = '26px';
const StyledHeader = styled.header`
  font-family: 'Questrial', 'Helvetica', 'Arial', sans-serif;
  padding-top: ${padding};
  padding-left: ${padding};
  a {
    color: ${({theme}) => theme.primary};
    font-size: ${fontSize};
    text-decoration: none;
    transition: all ${transitionDurationEasing};
    span {
      display: inline-block;
      font-size: ${iconSize};
      // transition: transform ${transitionDurationEasing};
    }
    &:hover {
      color: ${({theme}) => theme.secondary};
      // span {
      //   transform: rotate(-90deg) translateY(-8px);
      // }
    }
  }
`;

const Layout = ({ children }) => (
  <>
    <Head>
      {/* TODO: add meta tags */}
    </Head>
    <StyledHeader>
      <Link href="/"><a><span>▲</span>Y</a></Link>
    </StyledHeader>
    {children}
  </>
);

export default Layout;
