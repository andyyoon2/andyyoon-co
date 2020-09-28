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

const Header = styled.header`
  background: linear-gradient(rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1));
  padding: 1.25rem;
  padding-bottom: 2.5rem;
  text-align: right;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: inherit;
    margin-left: 1em;
    text-decoration-color: ${({theme}) => theme.primaryDark};
    &.home {
      margin: 0;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1.25rem;
`;

const links = [
  {
    href: '/blog',
    label: 'blog'
  },
  {
    href: '/resume',
    label: 'resume'
  },
];

const Layout = ({ children, currentPage }) => (
  <div>
    <Head>
      {/* TODO: add meta tags */}
    </Head>
    <Header className="layout-header">
      {/*<Link href="/"><a><span>▲</span>Y</a></Link>*/}
      {currentPage != "home"
        ? <Link href="/"><a className="home">← home</a></Link>
        : <div></div>
      }
      <div className="links">
        {links.map(link => (
          currentPage != link.label && <Link key={link.label} href={link.href}>{link.label}</Link>
        ))}
      </div>
    </Header>
    {children}
    <Footer>© Andy Yoon 2020</Footer>
  </div>
);

export default Layout;
