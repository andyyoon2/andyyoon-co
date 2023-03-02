import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { KeepTogether } from './shared'

export default function Hero () {
  const [isSerif, setIsSerif] = useState(false)
  // TODO 2023-03-01: This doesn't work, component ends up all lowercase. Same with <Box component="">
  // const HeroComponent = isSerif ? 'HeroSerif' : 'HeroSansSerif';

  const HeroContent = () => (
    <>
      <Box component='span' sx={{ display: { xs: 'block', sm: 'inline-block' } }}>
        Calm &amp; Compassionate
      </Box>
      <Box component='span' sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
        &nbsp;
      </Box>
      <KeepTogether>Frontend Engineer</KeepTogether>
    </>
  )

  return (
    <Box
      component='section'
      sx={{ textAlign: 'center' }}
      onClick={() => { setIsSerif(!isSerif) }}
    >
      {isSerif
        ? <HeroSerif><HeroContent /></HeroSerif>
        : <HeroSansSerif><HeroContent /></HeroSansSerif>}

      <Box
        component='h1'
        className='serif'
        sx={{
          fontWeight: 'normal',
          marginBottom: '0.5em',
          fontSize: {
            xs: '1.75rem',
            sm: '2rem',
            md: '2.625rem'
          }
        }}
      >
        <Box component='span' sx={{ display: { xs: 'block', sm: 'inline-block' } }}>
          Calm &amp; Compassionate
        </Box>
        <Box component='span' sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
          &nbsp;
        </Box>
        <KeepTogether>Frontend Engineer</KeepTogether>
      </Box>

      <Box
        component='h2' sx={{
          fontSize: {
            xs: '1rem',
            sm: '1.25rem',
            md: '1.75rem'
          },
          fontWeight: 'normal',
          marginTop: 0,
          marginBottom: '3rem',
          padding: '0 1em',
          textAlign: 'center'
        }}
      >
        With a high-quality approach &amp; <KeepTogether>keen eye for detail</KeepTogether>
      </Box>

      <a href='mailto:insoo.yoon@proton.me'>
        <Button variant='contained' size='large'>Contact Me</Button>
      </a>
    </Box>
  )
}

function HeroSansSerif ({ children }) {
  return (
    <Box
      component='h1'
      sx={{
        color: 'var(--color-primary)',
        fontWeight: 800,
        fontSize: '2rem',
        letterSpacing: '-0.022em',
        marginBottom: '0.5em'
        // fontSize: {
        //   xs: '1.75rem',
        //   sm: '2rem',
        //   md: '2.625rem',
        // },
      }}
    >
      {children}
    </Box>
  )
}

function HeroSerif ({ children }) {
  return (
    <Box
      component='h1'
      className='serif'
      sx={{
        fontWeight: 'normal',
        marginBottom: '0.5em',
        fontSize: {
          xs: '1.75rem',
          sm: '2rem',
          md: '2.625rem'
        }
      }}
    >
      {children}
    </Box>
  )
}
