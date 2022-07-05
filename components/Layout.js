import { useMemo } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Header';
import { useBlogPost } from '../hooks/useBlogPost';

export default function Layout(props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isBlogPost = useBlogPost();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: [
            'Inter var',
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
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
        <Container maxWidth={isBlogPost ? 'md' : 'sm'} sx={{
          paddingTop: '160px',
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
