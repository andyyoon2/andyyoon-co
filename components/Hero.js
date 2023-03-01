import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Block, KeepTogether } from './shared';

export default function Hero() {
  return (
    <Box component="section" sx={{
      textAlign: 'center',
    }}>
      <Box
        component="h1"
        className="serif"
        sx={{
          fontWeight: 'normal',
          marginBottom: '2rem',
          fontSize: {
            xs: '1.75rem',
            sm: '2rem',
            md: '2.25rem',
          },
        }}
      >
        <Box component="span" sx={{ display: { xs: 'block', sm: 'inline-block' } }}>
          Calm &amp; Compassionate
        </Box>
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
          &nbsp;
        </Box>
        <KeepTogether>Frontend Engineer</KeepTogether>
      </Box>

      <Box component="h2" sx={{
        fontSize: {
          xs: '1rem',
          sm: '1.25rem',
        },
        fontWeight: 'normal',
        margin: '0 auto',
        marginBottom: '3rem',
        maxWidth: '500px',
        padding: '0 1em',
        textAlign: 'left',
      }}>
        <Block sx={{ marginBottom: '1em' }}>
          Hi, I&apos;m Andy. I have over 7 years of experience leading teams,
          proactively solving problems, and creating responsive apps.
        </Block>
        <Block>
          With my high-quality approach and keen eye for detail, I&apos;m ready
          to help your team improve processes and amplify your global impact.
        </Block>
      </Box>

      <a href="mailto:insoo.yoon@proton.me">
        <Button variant="contained" size="large">Contact Me</Button>
      </a>
    </Box>
  );
}
