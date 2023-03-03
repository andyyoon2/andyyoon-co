import Box from '@mui/material/Box'
import { responsiveTextH2 } from './shared/styles'
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
    <section>
      <Box component='h2' sx={{ ...responsiveTextH2 }}>Contact</Box>
      <Box>
        {links.map(link => (
          <Box key={link.key}>
            {/* https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-react-jsx#comment87874314_33471928 */}
            <Box><link.icon /></Box>
            <Box
              component='a'
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link.label}
            </Box>
          </Box>
        ))}
      </Box>
    </section>
  )
}
