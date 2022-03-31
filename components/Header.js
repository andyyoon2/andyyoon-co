import Link from 'next/link';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

// Based off colors from globals.css
const lightGradient = 'linear-gradient(rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1))';
const darkGradient = 'linear-gradient(hsla(256, 0%, 15%, 0.85) 60%, hsla(256, 0%, 15%, 0.4) 80%, hsla(256, 0%, 15%, 0.1))';

export default function Header() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <header>
      <Box sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1em 0',
        background: prefersDarkMode ? darkGradient : lightGradient,
        padding: '1.25rem 1.25rem 2.5rem',
      }}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
      </Box>
    </header>
  );
}
