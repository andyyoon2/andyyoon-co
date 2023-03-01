import Box from '@mui/material/Box';
import Hero from '../components/Hero';
import Work from '../components/Work';

export default function Home() {
  return (
    // Offset for global padding in <Layout> (see _app.js)
    <Box sx={{ marginTop: '-40px' }}>
      <Hero />
      <Work />
    </Box>
  )
}
