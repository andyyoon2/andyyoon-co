import Box from '@mui/material/Box';

const NEWEST_YEAR = 2023;
const OLDEST_YEAR = 2015;
const ACCENT_YEARS = [2023, 2019, 2017, 2015];

export default function Timeline() {
  const years = [];
  for (const i = NEWEST_YEAR; i >= OLDEST_YEAR; i--) {
    years.push(i);
  }

  return (
    <Box>
      <Box component="ul" sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        textAlign: 'right',
      }}>
        {years.map(year => (
          <Box key={year} component="li" sx={
            !ACCENT_YEARS.includes(year)
              ? {
                color: 'var(--color-light-gray-text)',
                fontSize: '0.875rem',
              }
              : {}
          }>{year}</Box>
        ))}
      </Box>
    </Box>
  );
}
