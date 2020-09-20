import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/global.css';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Sinkin Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
