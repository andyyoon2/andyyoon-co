import Box from '@mui/material/Box'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Contact from '../components/Contact'
// import Portfolio from '../components/Portfolio'

export default function Home () {
  return (
    // Offset for global padding in <Layout> (see _app.js)
    <Box sx={{ marginTop: '-20px' }}>
      <Hero />
      <Work />
      {/* <Portfolio /> */}
      <Contact />
    </Box>
  )
}
