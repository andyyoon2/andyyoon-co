import Box from '@mui/material/Box'
import Signature from '../svg/Signature'

export default function Footer () {
  return (
    <Box component='footer' sx={{ textAlign: 'center' }}>
      <Box
        component='p'
        className='gray-text'
        sx={{
          fontSize: '1rem',
          letterSpacing: '-0.011em'
        }}
      >
        {/* © {new Date().getFullYear()} Andy Yoon */}
        <Box component='span'>Designed and built by Andy Yoon</Box>
        <Signature className='gray-text' sx={{ height: '4rem' }} />
      </Box>
    </Box>
  )
}
