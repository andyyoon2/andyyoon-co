import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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
  
  > * {
    max-width: 720px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
  <LayoutWrapper>
    <Head>
      {/* TODO: add meta tags */}
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    </Head>
    <Header className="layout-header">
      <div>
        <Link href="/"><a className="home">andyyoon</a></Link>
        <div className="links">
          {links.map(link => (
            <Link key={link.label} href={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
    </Header>
    {children}
    <Footer>
      <div>© Andy Yoon 2020</div>
      {currentPage === 'home' &&
        <small>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
      }
    </Footer>
  </LayoutWrapper>
);

export default Layout;
