import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/global.css';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
    * {
      box-sizing: border-box;
    }
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Questrial', 'Helvetica', 'Arial', sans-serif;
  }
  ::selection {
    background: ${({theme}) => theme.tertiary};
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
