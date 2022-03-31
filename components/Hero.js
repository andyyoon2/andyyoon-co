import Box from '@mui/material/Box';
import { Bold, KeepTogether } from './shared';

export default function Hero() {
  return (
    <Box sx={{ marginTop: '4rem' }}>
      <Box component="h3" sx={{
        fontWeight: 300,
        fontSize: '1.75rem',
      }}>
        Hi, I'm <KeepTogether>Andy Yoon</KeepTogether>
      </Box>
      <Box component="h1" sx={{
        fontWeight: 350,
        fontSize: '2rem',
      }}>
        <Bold>Web developer</Bold> &amp; <Bold>musician</Bold> based in
        <KeepTogether>Los Angeles</KeepTogether>
      </Box>
      <Box component="h2" sx={{
        fontWeight: 300,
        fontSize: '1.25rem',
        fontStyle: 'italic',
      }}>
        My mission is to use my skills to serve others and make a tangible positive contribution to the world.
      </Box>
    </Box>
  );
}
