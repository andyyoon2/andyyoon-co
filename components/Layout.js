'use client'

import { useMemo } from 'react'
import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './Header'
import Footer from './Footer'

export default function Layout (props) {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        // palette: {
        //   mode: prefersDarkMode ? 'dark' : 'light',
        // },
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
            '"Segoe UI Symbol"'
          ].join(',')
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none'
              }
            }
          }
        }
      }),
    [] // [prefersDarkMode],
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth='md' sx={{
            paddingTop: '160px'
          }}
        >
          <Header />
          <main>
            {props.children}
          </main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}
