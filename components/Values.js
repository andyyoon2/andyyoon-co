import Box from '@mui/material/Box'
import { responsiveTextH3 } from './shared/styles'

const spanStyle = {
  display: 'block',
  marginBottom: '2rem'
}
const h3Style = {
  ...responsiveTextH3,
  fontWeight: 'normal',
  lineHeight: 1.3
}

export default function Values () {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <Box component="h3" sx={h3Style}>
        <Box component="span" sx={spanStyle}>Hi, I'm Andy.</Box>
        <Box component="span" sx={spanStyle}>
          I seek to inspire people to be more vulnerable and authentic.
          I believe the more deeply we connect with ourselves,
          the more kindness we radiate outwards to change our world.
        </Box>
      </Box>
      <Box component="h3" sx={h3Style}>
      </Box>
    </Box>
  )
}

