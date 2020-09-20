import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  a {
    text-decoration: none;
  }
`;

const Layout = ({ children }) => (
  <>
    <Head>
      {/* TODO: add meta tags */}
    </Head>
    {/* <StyledHeader>
      <Link href="/"><a>▲Y</a></Link>
    </StyledHeader> */}
    {children}
  </>
);

export default Layout;
