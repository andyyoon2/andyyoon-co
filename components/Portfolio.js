import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import {
  responsiveTextH2,
  responsiveTextRegular
} from './shared/styles'

import userSettings from '../public/img/user-settings/desktop-new-2.png'

const links = [
  {
    key: 'user-settings',
    label: 'EnterpriseAlumni: User Settings',
    href: '/blog/user-settings',
    image: userSettings,
    alt: ''
  }
]

export default function Portfolio () {
  return (
    <Box component='section' sx={{ textAlign: 'center' }}>
      <Box
        component='h2'
        sx={{
          ...responsiveTextH2,
          marginBottom: '1.25em'
        }}
      >
        Selected Work
      </Box>
      {links.map(link => (
        <Link key={link.key} href={link.href}>
          <Box
            sx={{
              ...responsiveTextRegular,
              margin: '0 auto',
              maxWidth: '600px',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
          >
            <Image src={link.image} alt={link.alt} />
            <Box
              component='span'
              sx={{
                display: 'inline-block',
                marginTop: '1.25rem',
                textDecoration: 'underline'
              }}
            >{link.label}
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  )
}
