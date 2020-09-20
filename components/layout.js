import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { pagePadding, transitionDurationEasing } from '../styles';

const fontSize = '28px';
const iconSize = '26px';
const StyledLayout = styled.div`
  padding: ${props => props.padding ? pagePadding : '0'};
  header.layout-header {
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
  }
`;

const Layout = ({ children, padding = true }) => (
  <StyledLayout padding={padding}>
    <Head>
      {/* TODO: add meta tags */}
    </Head>
    <header className="layout-header">
      <Link href="/"><a><span>▲</span>Y</a></Link>
    </header>
    {children}
  </StyledLayout>
);

export default Layout;
