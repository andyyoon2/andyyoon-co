import Link from 'next/link'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
// import useMediaQuery from '@mui/material/useMediaQuery';
import { Bold } from './shared/components'

// Based off colors from globals.css
const lightGradient = `
  linear-gradient(
    hsla(var(--primary-hue), 10%, 95%, 1) 25%,
    hsla(var(--primary-hue), 10%, 95%, 0.85) 60%,
    hsla(var(--primary-hue), 10%, 95%, 0.4) 80%,
    hsla(var(--primary-hue), 10%, 95%, 0)
  )
`
// const darkGradient = `
//   linear-gradient(
//     hsla(var(--primary-hue), 0%, 15%, 1) 25%,
//     hsla(var(--primary-hue), 0%, 15%, 0.85) 60%,
//     hsla(var(--primary-hue), 0%, 15%, 0.4) 80%,
//     hsla(var(--primary-hue), 0%, 15%, 0.1)
//   )
// `;

const Anchor = styled('a')({
  cursor: 'pointer',
  '&:hover': { textDecoration: 'underline' }
})

export default function Header () {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    // TODO Jun 12: Can DRY these styles with other pages
    <header>
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: lightGradient, // prefersDarkMode ? darkGradient : lightGradient,
        paddingTop: '1.25rem',
        paddingBottom: '2.5rem',
        paddingLeft: { xs: '16px', sm: '24px' }, // left-right padding matches <Blog>
        paddingRight: { xs: '16px', sm: '24px' },
        textAlign: 'center',
        zIndex: 1
      }}
      >
        <Box sx={{
          margin: '0 auto',
          width: '100%',
          // Must match maxWidth on <Container> in <Layout> minus padding
          // maxWidth: isBlogPost ? '852px' : '552px',
          maxWidth: '852px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
          <Link href='/' passHref><Anchor><Bold>andyyoon</Bold></Anchor></Link>
          <nav>
            <Link href='/blog' passHref><Anchor>blog</Anchor></Link>
          </nav>
        </Box>
      </Box>
    </header>
  )
}
