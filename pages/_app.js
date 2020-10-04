import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/global.css';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
    font-family: 'Inter', 'Helvetica', 'Arial', sans-serif;
    line-height: 1.5;
    * {
      box-sizing: border-box;
    }
  }
  main {
    max-width: ${({theme}) => theme.smallWrapperWidth};
    margin: 0 auto;
    margin-top: 13rem;
  }
  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }
  a {
    color: inherit;
    display: inline-block;
    font-variation-settings: 'wght' 525;
    text-decoration-color: #000;
    transition: all ease-out 0.3s;
    &:hover {
      text-decoration-color: ${({theme}) => theme.primaryDark};
    }
    &.no-decoration {
      text-decoration: none;
    }
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
