import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { KeepTogether } from './shared/components'

export default function Hero () {
  return (
    <Box
      component='section'
      sx={{ textAlign: 'center' }}
    >
      <Box
        component='h1'
        className='serif'
        sx={{
          fontWeight: 'normal',
          marginBottom: '0.5em',
          fontSize: {
            xs: '2rem',
            sm: '2.25rem',
            md: '2.625rem'
          },
          letterSpacing: '-0.022em'
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
          fontWeight: 'normal',
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
            md: '1.75rem'
          },
          letterSpacing: {
            xs: '-0.017em',
            sm: '-0.019em',
            md: '-0.021em'
          },
          marginTop: 0,
          marginBottom: '3rem',
          padding: '0 1em',
          textAlign: 'center'
        }}
      >
        With a high-quality approach &amp; <KeepTogether>keen eye for detail</KeepTogether>
      </Box>

      <a href='mailto:insoo.yoon@proton.me'>
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
      </a>
    </Box>
  )
}
