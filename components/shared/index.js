import Box from '@mui/material/Box';

export const Bold = ({ children }) => (
  <Box component="strong" sx={{
    fontWeight: 600,
  }}>{children}</Box>
);

export const KeepTogether = ({ children }) => (
  <Box component="span" sx={{ display: 'inline-block' }}>{children}</Box>
);
