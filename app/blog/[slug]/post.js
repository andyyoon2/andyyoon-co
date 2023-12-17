'use client'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { formatDate } from '../../../lib/client-side'
import {
  responsiveTextH1,
  responsiveTextH2,
  responsiveTextH3,
  responsiveTextRegular,
  responsiveTextSmall
} from '../../../components/shared/styles'

const serifFontFamily = 'Lora, Georgia, "Times New Roman", Times, serif'

export default function Post ({ post }) {
  return (
    <Box sx={{
      margin: '0 auto',
      marginBottom: '160px !important'
    }}
    >
      <Box sx={{ marginBottom: '120px' }}>
        <Typography
          variant='h1' sx={{
            ...responsiveTextH1,
            fontFamily: serifFontFamily,
            marginBottom: '0.25em'
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant='h2' className='gray-text' sx={{
            ...responsiveTextRegular,
            fontWeight: 400,
            margin: '0.85em 0'
          }}
        >
          {post.description}
        </Typography>
        <Typography
          variant='body1' className='gray-text' sx={{
            ...responsiveTextSmall,
            marginBottom: 0
          }}
        >
          {formatDate(post.date)}
        </Typography>
      </Box>
      <Box
        sx={{
          marginBottom: '160px',
          'p, li': {
            ...responsiveTextRegular,
            lineHeight: 1.5
          },
          'blockquote:first-of-type': {
            marginBottom: '3em'
          },
          'h1, h2, h3, h4, h5': {
            fontFamily: serifFontFamily
          },
          h2: {
            ...responsiveTextH2,
            marginTop: '1.5em',
            marginBottom: '1em'
          },
          h3: {
            ...responsiveTextH3
          },
          h4: {
            ...responsiveTextRegular
          },
          img: {
            maxWidth: '100%',
            margin: '1em auto',
            '&[src$=\'#two-thirds\']': {
              display: 'block',
              width: {
                md: '67%'
              }
            },
            '&[src$=\'#third\']': {
              maxWidth: '256px',
              display: {
                xs: 'block',
                md: 'inline-block'
              },
              width: {
                sm: '40%',
                md: '30%'
              },
              marginRight: {
                md: '3%'
              },
              '&:last-child': {
                marginRight: {
                  md: 0
                }
              }
            }
          }
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {/* TODO: Add some footer here to signify the article is over. Tags? */}
      <Link href='/blog'>← See all posts</Link>
    </Box>
  )
}
