import { Fragment } from 'react';
import Box from '@mui/material/Box';
import { Bold } from './shared';
import Timeline from './work/Timeline';

const workData = [
  {
    key: 'ea',
    title: 'Lead Software Engineer',
    company: 'EnterpriseAlumni',
    location: 'Los Angeles, CA',
    url: 'https://enterprisealumni.com/',
    date: 'Sep 2019 - Sep 2023',
    // image: 'ea-portal-home.png',
  },
  {
    key: 'kia',
    title: 'Senior Frontend Developer',
    company: 'Hyundai AutoEver America',
    location: 'Irvine, CA',
    url: 'https://www.autoeveramerica.com/',
    date: 'Nov 2017 - Sep 2019',
    // image: 'kia-home.png',
  },
  {
    key: 'compapps',
    title: 'Software Developer',
    company: 'Composite Apps',
    location: 'Irvine, CA',
    url: 'https://compositeapps.net/',
    date: 'Oct 2015 - Oct 2017',
  },
  {
    key: 'ucla',
    title: 'B.S. Computer Science',
    company: 'UCLA',
    location: 'Los Angeles, CA',
    date: '2010-2015',
  },
];

const WorkLine = ({ title, company, url, location, date }) => (
  <Box>
    <Box component="p" sx={{
      marginTop: 0,
      marginBottom: '0.5em',
    }}>
      <Bold sx={{ display: 'block' }}>{title}</Bold>
      <Box component="a" href={url} target="_blank">{company}</Box>
      <Box sx={{
        display: 'block',
        fontSize: '0.875rem',
      }}>{location}</Box>
    </Box>
    {/* <Box component="p" sx={{ fontSize: '0.875rem' }}>{date}</Box> */}
  </Box>
);

const Divider = () => (
  <Box sx={{
    height: '100%',
    width: '1px',
  }}></Box>
);

export default function Work() {
  return (
    <Box component="section">
      <Box
        component="h3"
        className="serif"
        sx={{
          fontSize: '1.25rem',
          fontWeight: 'normal',
          textAlign: 'center'
        }}
      >
        Experience
      </Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2rem 4fr',
        gridTemplateRows: `repeat(${workData.length}, 1fr)`,
      }}>
        {/* <Timeline /> */}
        {/* <Divider /> */}
        {workData.map(({key, date, ...rest}) => (
          <Fragment key={key}>
            <Box sx={{ textAlign: 'right' }}>{date.substring(date.length-4, date.length)}</Box> {/* TODO: clean up date stuff */}
            <Box sx={{
              textAlign: 'center',
              transform: 'translateY(-1px)',
            }}>‣</Box>
            <WorkLine {...rest} />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}
