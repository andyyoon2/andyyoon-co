import Link from 'next/link';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <header>
      <Box sx={{ position: 'sticky', top: 0 }}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
      </Box>
    </header>
  );
}
