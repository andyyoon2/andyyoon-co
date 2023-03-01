import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Bold } from './shared';

const workData = [
  {
    key: 'ea',
    title: 'Lead Software Engineer',
    company: 'EnterpriseAlumni',
    location: 'Los Angeles, CA',
    url: 'https://enterprisealumni.com/',
    endDate: 2023,
    startDate: 2019,
    // image: 'ea-portal-home.png',
  },
  {
    key: 'kia',
    title: 'Senior Frontend Developer',
    company: 'Hyundai AutoEver America',
    location: 'Irvine, CA',
    url: 'https://www.autoeveramerica.com/',
    date: 'Nov 2017 - Sep 2019',
    endDate: 2019,
    startDate: 2017,
    // image: 'kia-home.png',
  },
  {
    key: 'compapps',
    title: 'Software Developer',
    company: 'Composite Apps',
    location: 'Irvine, CA',
    url: 'https://compositeapps.net/',
    date: 'Oct 2015 - Oct 2017',
    endDate: 2017,
    startDate: 2015,
  },
  {
    key: 'ucla',
    title: 'B.S. Computer Science',
    company: 'UCLA',
    location: 'Los Angeles, CA',
    date: '2010-2015',
    endDate: 2015,
  },
];

const WorkDetails = ({ title, company, url, location, date }) => (
  <Box>
    <Box component="p" sx={{
      marginTop: 0,
      marginBottom: '1em',
    }}>
      <Bold sx={{ display: 'block' }}>{title}</Bold>
      <Box component="a" href={url} target="_blank">{company}</Box>
      <Box sx={{
        display: 'block',
        fontSize: '0.875rem',
        marginTop: '0.325em',
      }}>{location}</Box>
    </Box>
    {/* <Box component="p" sx={{ fontSize: '0.875rem' }}>{date}</Box> */}
  </Box>
);

const WorkTimeline = () => (
  <Box sx={{
    display: 'grid',
    gridTemplateColumns: '1fr 2rem 4fr',
    gridTemplateRows: `1.5fr repeat(${workData.length-1}, 1fr)`,
    // TODO 2023-02-28: Test this with different font sizes
    maxWidth: '18.75rem',
    margin: '0 auto',
  }}>
    {workData.map(({key, endDate, startDate, ...rest}) => (
      <Fragment key={key}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'right',
          paddingBottom: '0.75em',
        }}>
          <Box>{endDate}</Box>
          {startDate &&
            // Create array of values between dates to show years between
            Array.from(
              {length: endDate-startDate-1 },
              (_, i) => (endDate-i-1)
            ).map(date => (
              <Box key={date} sx={[
                { color: 'var(--color-light-gray-text)', fontSize: '0.875rem' },
                // TODO, 2023-02-28: Improve naive vertical spacing,
                // relies on WorkDetails content to be vertically centered
                key !== 'ea' ? { transform: 'translateY(-67%)' } : null
              ]}>{date}</Box>
            ))
          }
        </Box>
        <Box sx={{
          textAlign: 'center',
          transform: 'translateY(-1px)',
        }}>‣</Box>
        <WorkDetails {...rest} />
      </Fragment>
    ))}
  </Box>
);

export default function Work() {
  return (
    <Box component="section">
      <Box
        component="h2"
        className="serif"
        sx={{
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
          },
          fontWeight: 'normal',
          marginBottom: '1em',
          textAlign: 'center',
        }}
      >
        Experience
      </Box>
      <WorkTimeline />
      <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
        {/* <Box component="h3" sx={{
          fontSize: {
            xs: '1rem',
            sm: '1.25rem',
          },
          fontWeight: 600,
        }}>See More Details</Box> */}
        <Button variant="outlined">Download Resume</Button>
      </Box>
    </Box>
  );
}
