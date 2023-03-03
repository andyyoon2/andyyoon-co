import Box from '@mui/material/Box'
import Signature from '../svg/Signature'

export default function Footer () {
  return (
    <Box component='footer' sx={{ textAlign: 'center' }}>
      <Box
        className='gray-text'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1rem',
          letterSpacing: '-0.011em',
          marginBottom: '1em'
        }}
      >
        <Box className='gray-text' sx={{ flex: '1 0 33%', textAlign: 'right' }}>
          <Signature sx={{ height: '3rem' }} />
        </Box>
        <Box component='span' sx={{ flex: '0 0 1.5rem' }}>©</Box>
        <Box component='span' sx={{ flex: '1 0 33%', textAlign: 'left' }}>
          {new Date().getFullYear()}
        </Box>
      </Box>
    </Box>
  )
}
