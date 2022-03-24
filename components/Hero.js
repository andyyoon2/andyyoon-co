import Box from '@mui/material/Box';

const KeepTogether = ({ children }) => (
  <Box component="span" sx={{ display: 'inline-block' }}>{children}</Box>
);

const Heading1 = ({ children }) => (
  <Box component="h1" sx={{
    fontWeight: 300,
  }}>{children}</Box>
);

const Heading2 = ({ children }) => (
  <Box component="h2" sx={{
    fontWeight: 400,
    fontStyle: 'italic',
  }}>{children}</Box>
);

export default function Hero() {
  return (
    <>
      <Box>
        <Heading1>Welcome! <KeepTogether>I'm Andy Yoon</KeepTogether></Heading1>
        <Heading2>
          <span>A web developer and musician based in </span>
          <KeepTogether>Los Angeles</KeepTogether>
        </Heading2>
      </Box>
    </>
  );
}
