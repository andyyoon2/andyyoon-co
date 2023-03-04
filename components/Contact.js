import Box from '@mui/material/Box'
import { responsiveTextH2, responsiveTextRegular } from './shared/styles'
import Mail from '../svg/Mail'
import LinkedIn from '../svg/LinkedIn'
import GitHub from '../svg/GitHub'

const links = [
  {
    key: 'email',
    icon: Mail,
    label: 'insoo.yoon@proton.me',
    href: 'mailto:insoo.yoon@proton.me'
  },
  {
    key: 'linkedin',
    icon: LinkedIn,
    label: 'in/andyyoon2',
    href: 'https://linkedin.com/in/andyyoon2'
  },
  {
    key: 'github',
    icon: GitHub,
    label: 'andyyoon2',
    href: 'https://github.com/andyyoon2'
  }
]

export default function Contact () {
  return (
    <Box component='section'>
      <Box
        component='h2'
        sx={{
          ...responsiveTextH2,
          marginBottom: '1.25em',
          textAlign: 'center'
        }}
      >Contact
      </Box>
      {links.map(link => (
        <Box
          key={link.key}
          sx={{
            ...responsiveTextRegular,
            width: '12.5rem',
            margin: '1.5rem auto',
            whiteSpace: 'nowrap'
          }}
        >
          {/* https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-react-jsx#comment87874314_33471928 */}
          <link.icon sx={{ height: '1.375em', transform: 'translateY(0.24em)' }} />
          <Box
            component='a'
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              display: 'inline-block',
              justifySelf: 'start',
              marginLeft: '1rem',
              transform: {
                xs: 'translateY(-2px)',
                sm: 'translateY(-1px)'
              }
            }}
          >
            {link.label}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
