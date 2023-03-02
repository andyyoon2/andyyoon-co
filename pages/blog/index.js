import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getAllPosts } from '../../lib'
import { formatDate } from '../../lib/client-side'

const pStyle = { marginTop: 0, marginBottom: '0.75em' }

const Post = ({ post, number }) => (
  <Box sx={{
    marginBottom: '6rem',
    marginLeft: { sm: '6.25em' },
    position: 'relative'
  }}
  >
    <Link href={`/blog/${post.slug}`} passHref>
      <Box
        component='a' sx={{
          display: 'inline-block',
          textDecoration: 'none',
          '&:hover': {
            '.title': { textDecoration: 'underline' }
          }
        }}
      >
        <div>
          <Typography
            variant='body1' sx={{
              margin: 0,
              fontSize: { xs: '2rem', sm: '4rem' },
              fontWeight: 200,
              lineHeight: 1.3,
              position: 'absolute',
              top: { xs: '-1.5em', sm: '-0.18em' },
              left: { xs: 0, sm: '-1.625em' },
              opacity: { xs: 1, sm: 0.8 }
            }}
          >
            {formatPostNumber(number)}
          </Typography>
          <Typography
            variant='h3' className='title' sx={{
              fontSize: '1.375rem',
              fontWeight: 600,
              marginTop: 0,
              marginBottom: '1em'
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant='body1' sx={{
              fontSize: '1.125rem',
              fontWeight: 400,
              ...pStyle
            }}
          >
            {post.description}
          </Typography>
          <Typography
            variant='body1' sx={{
              fontWeight: 300,
              marginBottom: 0,
              ...pStyle
            }}
          >
            {formatDate(post.date)}
          </Typography>
        </div>
      </Box>
    </Link>
  </Box>
)

export default function Blog ({ posts }) {
  return (
    <Box sx={{ margin: '0 auto' }}>
      <Box className='heading' sx={{ marginBottom: '10rem' }}>
        <Typography
          variant='h1' sx={{
            fontSize: '3rem',
            fontWeight: '600',
            marginTop: '0',
            marginBottom: '0.25em'
          }}
        >
          Blog
        </Typography>
        {/* <Typography variant="h2" sx={{
          fontSize: '1.5rem',
          fontWeight: '300',
          marginTop: '0',
        }}>
          Sharing how I navigate life &amp; discovering myself in a new medium
        </Typography> */}
      </Box>
      {posts.map((post, index) => (
        <Post post={post} number={posts.length - index} key={post.slug} />
      ))}
    </Box>
  )
}

// Formats numbers as 2-digits
function formatPostNumber (number) {
  const num = parseInt(number)
  if (num >= 10) {
    return number
  } else {
    return '0' + number
  }
}

export async function getStaticProps () {
  const posts = getAllPosts(['slug', 'title', 'description', 'date'])

  return {
    props: {
      posts
    }
  }
}
