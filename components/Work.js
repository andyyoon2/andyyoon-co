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
    date: 'Sep 2019 – Feb 2023',
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
    date: 'Nov 2017 – Sep 2019',
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
    date: 'Oct 2015 – Oct 2017',
    endDate: 2017,
    startDate: 2015,
  },
  // {
  //   key: 'ucla',
  //   title: 'B.S. Computer Science',
  //   company: 'UCLA',
  //   location: 'Los Angeles, CA',
  //   date: '2010 – 2015',
  //   endDate: 2015,
  // },
];

const WorkDetails = ({ title, company, url, location, date }) => (
  <Box>
    <Box component="p" sx={{
      marginTop: 0,
      marginBottom: '2rem',
    }}>
      <Bold sx={{
        display: 'block',
        fontSize: '1.25rem',
        marginBottom: '0.175em',
        // position: 'relative',
        // '::before': {
        //   content: '"‣"',
        //   position: 'absolute',
        //   top: '-1px',
        //   left: '-1em',
        // }
      }}>{title}</Bold>
      <Box component="a" href={url} target="_blank" sx={{
        display: 'block',
        fontSize: '1rem',
        marginBottom: '0.5em',
      }}>{company}</Box>
      <Box sx={{
        display: 'block',
        fontSize: '0.875rem',
        marginBottom: '0.25em',
      }}>{date}</Box>
      <Box sx={{ fontSize: '0.875rem' }}>{location}</Box>
    </Box>
  </Box>
);

export default function Work() {
  return (
    <Box component="section">
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <Box sx={{ flex: '0 0 50%' }}>
          <Box
            component="h2"
            sx={{
              fontSize: {
                xs: '1.25rem',
                sm: '1.5rem',
                md: '1.75rem',
              },
              fontWeight: 600,
              paddingRight: '2rem',
              marginTop: 0,
              marginBottom: '1em',
              textAlign: 'right',
            }}
          >
            7+ years of experience leading teams, solving problems, and creating responsive apps
          </Box>
        </Box>

        <Box sx={{
          flex: '0 0 50%',
          paddingTop: '0.25rem',
          paddingLeft: '2rem',
        }}>
          {workData.map(({key, ...rest}) => <WorkDetails key={key} {...rest} />)}
        </Box>
      </Box>

      <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
        <Button variant="outlined">Download Resume</Button>
      </Box>
    </Box>
  );
}
