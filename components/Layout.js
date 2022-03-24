import Head from 'next/head';
import Container from '@mui/material/Container';

import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Andy Yoon</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <Header />
        <main>
          {props.children}
        </main>
      </Container>
    </>
  );
}
