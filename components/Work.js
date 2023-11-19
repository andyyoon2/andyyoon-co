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
    key: 'xyla',
    title: 'Lead Frontend Engineer',
    company: 'Xyla',
    location: 'Los Angeles, CA',
    url: 'https://www.openevidence.com/',
    date: 'May 2023 – Present'
  },
  {
    key: 'ea',
    title: 'Lead Software Engineer',
    company: 'EnterpriseAlumni',
    location: 'Los Angeles, CA',
    url: 'https://enterprisealumni.com/',
    date: 'Sep 2019 – Feb 2023'
  },
  {
    key: 'kia',
    title: 'Senior Frontend Developer',
    company: 'Hyundai AutoEver America',
    location: 'Irvine, CA',
    url: 'https://www.hyundai-autoever.com/eng/main/index.do',
    date: 'Nov 2017 – Sep 2019'
  },
  {
    key: 'compapps',
    title: 'Software Developer',
    company: 'Composite Apps',
    location: 'Irvine, CA',
    url: 'https://compositeapps.net/',
    date: 'Oct 2015 – Oct 2017'
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
    <Box component='section' sx={{ marginBottom: { xs: 0, sm: '6rem' } }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr'
        },
        gridTemplateRows: { xs: 'repeat(6, 1fr)', sm: 'repeat(4, 1fr)' },
        gridTemplateAreas: {
          // One `work` row per entry keeps layout clean
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
            'cta work'
            'cta work'
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
            marginBottom: '2em',
            textAlign: { xs: null, sm: 'right' }
          }}
        >
          <Box component='span' sx={{ color: 'var(--color-primary)' }}>8 years of experience </Box>
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
            sx={{ textDecoration: 'none', display: 'block', mb: 2 }}
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
