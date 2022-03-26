import Link from 'next/link';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <header>
      <Box sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1em 0',
        background: 'linear-gradient(rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.4) 80%, rgba(255, 255, 255, 0.1))',
        padding: '1.25rem 1.25rem 2.5rem',
      }}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
      </Box>
    </header>
  );
}
