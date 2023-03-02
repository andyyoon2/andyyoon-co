import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Bold, KeepTogether } from './shared';

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

const responsiveH2Sizes = {
  xs: '1.25rem',
  sm: '1.375rem',
  md: '1.75rem',
};
const responsiveH3Sizes = {
  xs: '1.125rem',
  sm: '1.25rem',
  md: '1.5rem',
};
const responsiveTextSizes = {
  xs: '1rem',
  sm: '1.125rem',
  md: '1.25rem',
};
const responsiveTextSizesSm = {
  xs: '0.875rem',
  sm: '1rem',
  md: '1.125rem',
};

const WorkDetails = ({ title, company, url, location, date }) => (
  <Box>
    <Box component="p" sx={{
      marginTop: 0,
      marginBottom: '2rem',
    }}>
      <Box component="h3" sx={{
        display: 'block',
        fontSize: responsiveH3Sizes,
        fontWeight: 600,
        marginTop: 0,
        marginBottom: '0.175em',
      }}>{title}</Box>
      <Box component="a" href={url} target="_blank" sx={{
        display: 'block',
        fontSize: responsiveTextSizes,
        marginBottom: '0.5em',
      }}>{company}</Box>
      <Box sx={{
        display: 'block',
        fontSize: responsiveTextSizesSm,
        marginBottom: '0.25em',
      }}>{date}</Box>
      <Box sx={{ fontSize: responsiveTextSizesSm }}>{location}</Box>
    </Box>
  </Box>
);

export default function Work() {
  return (
    <Box component="section">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
        },
        gridTemplateRows: 'repeat(6, 1fr)',
        gridTemplateAreas: {
          xs: `
            'heading'
            'work'
            'work'
            'work'
            'work'
            'cta'
          `,
          sm: `
            'heading work'
            'heading work'
            'cta work'
            'cta work'
            '. work'
            '. work'
          `,
        },
        columnGap: { xs: null, sm: '3rem', md: '4rem' },
        textAlign: { xs: 'center', sm: 'left' },
      }}>
        <Box
          component="h2"
          sx={{
            fontSize: responsiveH2Sizes,
            fontWeight: 600,
            gridArea: 'heading',
            marginTop: 0,
            marginBottom: '1em',
            textAlign: { xs: null, sm: 'right' },
          }}
        >
          <Box component="span" sx={{ color: 'var(--color-primary)' }}>7+ years of experience </Box>
          leading teams, solving problems, and creating <KeepTogether>responsive apps</KeepTogether>
        </Box>

        <Box sx={{
          gridArea: 'cta',
          textAlign: { xs: null, sm: 'right' },
        }}>
          <Button variant="outlined" size="large">Download Resume</Button>
        </Box>

        <Box sx={{
          gridArea: 'work',
          paddingTop: '1px', // Slight offset for different font-sizes
        }}>
          {workData.map(({key, ...rest}) => <WorkDetails key={key} {...rest} />)}
        </Box>
      </Box>
    </Box>
  );
}
