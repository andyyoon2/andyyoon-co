import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  background: linear-gradient(
    hsla(197, 12%, 98%, 1),
    hsla(197, 12%, 98%, 0.8) 75%,
    hsla(197, 12%, 98%, 0.1)
  );
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
  a.home {
    font-variation-settings: 'wght' 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .links a {
    margin-left: 1em;
    font-variation-settings: 'wght' 420;
  }
`;

const Footer = styled.footer`
  font-size: 0.875rem;
  text-align: center;
  padding: 1.25rem;
  div {
    margin-bottom: 0.5em;
  }
  small {
    color: #6a6a6a;
  }
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
      <Link href="/"><a className="home">andyyoon</a></Link>
      <div className="links">
        {links.map(link => (
          currentPage != link.label && <Link key={link.label} href={link.href}>{link.label}</Link>
        ))}
      </div>
    </Header>
    {children}
    <Footer>
      <div>© Andy Yoon 2020</div>
      <small>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
    </Footer>
  </div>
);

export default Layout;
