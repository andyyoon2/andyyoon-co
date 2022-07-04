import Box from '@mui/material/Box';

export const Bold = ({ children }) => (
  <Box component="strong" sx={{
    fontWeight: 600,
  }}>{children}</Box>
);

export const Block = ({ children, sx }) => (
  <Box component="span" sx={{
    display: 'block',
    ...sx
  }}>{children}</Box>
);

export const KeepTogether = ({ children }) => (
  <Box component="span" sx={{ display: 'inline-block' }}>{children}</Box>
);
