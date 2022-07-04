import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib';
import { formatDate } from '../../lib/client-side';

const PostContent = styled('div')({
  p: {
    fontSize: '1.25rem',
    margin: '2em 0',
    lineHeight: 1.5
  }
});
const serifFontFamily = '"Lora", "Times New Roman", sans-serif';

export default function Post({ post }) {
  return (
    <Box sx={{
      margin: { xs: '0 3rem', sm: '0 auto' },
      marginBottom: '160px !important',
    }}>
      <Box sx={{ marginBottom: '120px' }}>
        <Typography variant="h1" sx={{
          fontFamily: serifFontFamily,
          fontSize: '3rem',
          marginBottom: '0.25em',
        }}>
          {post.title}
        </Typography>
        <Typography variant="h2" className="gray-text" sx={{
          fontSize: '1.125rem',
          fontWeight: 400,
          margin: '0.85em 0',
        }}>
          {post.description}
        </Typography>
        <Typography variant="body1" className="gray-text" sx={{
          fontWeight: 300,
          marginBottom: 0,
        }}>
          {formatDate(post.date)}
        </Typography>
      </Box>
      <PostContent
        sx={{ fontFamily: serifFontFamily, marginBottom: '160px' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></PostContent>
      {/* TODO: Add some footer here to signify the article is over. Tags? */}
      <Link href="/blog"><a>← See all posts</a></Link>
    </Box>
  );
}


// Code adapted from Next.js blog starter
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'slug',
    // 'author',
    'content',
    // 'ogImage',
    // 'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
