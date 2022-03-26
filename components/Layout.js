import { useMemo } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Header';

export default function Layout(props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <Head>
        <title>Andy Yoon</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{
          // Ideally these should be applied to <body>, maybe update css-vars in createTheme
          // backgroundColor: 'background.default',
          // color: 'text.primary',
        }}>
          <Header />
          <main>
            {props.children}
          </main>
        </Container>
      </ThemeProvider>
    </>
  );
}
