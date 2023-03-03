import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { KeepTogether } from './shared/components'
import {
  responsiveTextH2,
  responsiveTextH3,
  responsiveTextRegular,
  responsiveTextSmall
} from './shared/styles'

const workData = [
  {
    key: 'ea',
    title: 'Lead Software Engineer',
    company: 'EnterpriseAlumni',
    location: 'Los Angeles, CA',
    url: 'https://enterprisealumni.com/',
    date: 'Sep 2019 – Feb 2023',
    endDate: 2023,
    startDate: 2019
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
    startDate: 2017
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
    startDate: 2015
  }
  // {
  //   key: 'ucla',
  //   title: 'B.S. Computer Science',
  //   company: 'UCLA',
  //   location: 'Los Angeles, CA',
  //   date: '2010 – 2015',
  //   endDate: 2015,
  // },
]

const WorkDetails = ({ title, company, url, location, date }) => (
  <Box>
    <Box sx={{ marginBottom: '2rem' }}>
      <Box
        component='h3' sx={{
          ...responsiveTextH3,
          display: 'block',
          fontWeight: 600,
          marginTop: 0,
          marginBottom: '0.175em'
        }}
      >{title}
      </Box>
      <Box
        component='a' href={url} target='_blank' sx={{
          ...responsiveTextRegular,
          display: 'inline-block',
          marginBottom: '0.5em'
        }}
      >{company}
      </Box>
      <Box sx={{
        ...responsiveTextSmall,
        display: 'block',
        marginBottom: '0.25em'
      }}
      >{date}
      </Box>
      <Box sx={{ ...responsiveTextSmall }}>{location}</Box>
    </Box>
  </Box>
)

export default function Work () {
  return (
    <Box component='section'>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr'
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
          `
        },
        columnGap: { xs: null, sm: '3rem', md: '4rem' },
        textAlign: { xs: 'center', sm: 'left' }
      }}
      >
        <Box
          component='h2'
          sx={{
            ...responsiveTextH2,
            fontWeight: 600,
            gridArea: 'heading',
            marginTop: 0,
            marginBottom: '1em',
            textAlign: { xs: null, sm: 'right' }
          }}
        >
          <Box component='span' sx={{ color: 'var(--color-primary)' }}>7+ years of experience </Box>
          leading teams, solving problems, and creating <KeepTogether>responsive apps</KeepTogether>
        </Box>

        <Box sx={{
          gridArea: 'cta',
          textAlign: { xs: null, sm: 'right' }
        }}
        >
          <Box
            component='a'
            href='/Andy-Yoon-resume.pdf'
            target='_blank'
            sx={{ textDecoration: 'none' }}
          >
            <Button variant='outlined' size='large' sx={{ ...responsiveTextSmall }}>
              View Resume
            </Button>
          </Box>
        </Box>

        <Box sx={{
          gridArea: 'work',
          paddingTop: '1px' // Slight offset for different font-sizes
        }}
        >
          {workData.map(({ key, ...rest }) => <WorkDetails key={key} {...rest} />)}
        </Box>
      </Box>
    </Box>
  )
}
