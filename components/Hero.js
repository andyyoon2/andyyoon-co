import Box from '@mui/material/Box';
import { Bold, Block, KeepTogether } from './shared';

export default function Hero() {
  return (
    <Box sx={{ marginTop: '4rem' }}>
      <Box component="h3" sx={{
        fontWeight: 300,
        fontSize: '1.75rem',
      }}>
        Hi, I'm <Bold><KeepTogether>Andy Yoon</KeepTogether></Bold>
      </Box>
      <Box component="h1" sx={{
        fontWeight: 350,
        fontSize: '2rem',
      }}>
        <Block sx={{ marginBottom: '0.25em' }}>Frontend Developer &amp; Musician</Block>
        <Block>based in&nbsp;<KeepTogether>Los Angeles</KeepTogether></Block>
      </Box>

      {/* TODO Jun 12: Mission statement or tagline
      <Box component="h2" sx={{
        fontWeight: 300,
        fontSize: '1.25rem',
        fontStyle: 'italic',
      }}>
      </Box>*/}
    </Box>
  );
}
