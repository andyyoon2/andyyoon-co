import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { KeepTogether } from './shared/components'
import { responsiveTextH1, responsiveTextH2 } from './shared/styles'

export default function Hero () {
  return (
    <Box
      component='section'
      sx={{ textAlign: 'center', marginBottom: '6.5rem' }}
    >
      <Box
        component='h1'
        className='serif'
        sx={{
          ...responsiveTextH1,
          fontWeight: 'normal',
          marginBottom: '0.5em'
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
          ...responsiveTextH2,
          fontWeight: 'normal',
          marginTop: 0,
          marginBottom: '3rem',
          padding: '0 1em',
          textAlign: 'center'
        }}
      >
        Creating positive impact with empathy &amp; purpose
      </Box>

      {/*<Box component='a' href='mailto:insoo.yoon@proton.me' sx={{ textDecoration: 'none' }}>
        <Button
          variant='contained'
          size='large'
          sx={{
            fontSize: {
              xs: '1rem',
              md: '1.125rem'
            },
            letterSpacing: {
              xs: '-0.011em',
              md: '-0.014em'
            }
          }}
        >Contact Me
        </Button>
      </Box>*/}
    </Box>
  )
}
