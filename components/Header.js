import Link from 'next/link';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Bold } from './shared';
import { useBlogPost } from '../hooks/useBlogPost';

// Based off colors from globals.css
const lightGradient = `
  linear-gradient(hsla(var(--primary-hue), 10%, 95%, 0.85) 60%,
  hsla(var(--primary-hue), 10%, 95%, 0.4) 80%,
  hsla(var(--primary-hue), 10%, 95%, 0.1))
`;
const darkGradient = `
  linear-gradient(hsla(var(--primary-hue), 0%, 15%, 0.85) 60%,
  hsla(var(--primary-hue), 0%, 15%, 0.4) 80%,
  hsla(var(--primary-hue), 0%, 15%, 0.1))
`;

const Anchor = styled('a')({
  cursor: 'pointer',
  marginRight: '1em',
  '&:hover': { textDecoration: 'underline' },
});

export default function Header() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isBlogPost = useBlogPost();

  return (
    // TODO Jun 12: Can DRY these styles with other pages
    <header>
      <Box sx={{
        position: 'fixed',
        top: 0,
        width: { xs: '100%', sm: 'calc(100% - 48px)' },
        // Must match maxWidth on <Container> in <Layout> minus padding
        maxWidth: isBlogPost ? '852px' : '552px',
        background: prefersDarkMode ? darkGradient : lightGradient,
        paddingTop: '1.25rem',
        paddingBottom: '2.5rem',
        paddingLeft: { xs: '3rem', sm: 0 }, // left-right padding matches <Blog>
        paddingRight: { xs: '3rem', sm: 0 },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/"><Anchor><Bold>andyyoon.co</Bold></Anchor></Link>
        <nav>
          <Link href="/blog"><Anchor>blog</Anchor></Link>
        </nav>
      </Box>
    </header>
  );
}
