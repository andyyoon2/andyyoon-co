import Link from 'next/link';
import { Heading, Layout } from '../../components';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib';

const Post = ({ post }) => (
  <Layout currentPage="blog">
    <Heading tag="h1">{post.title}</Heading>
    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    <Link href="/">Home</Link>
  </Layout>
);

// Code adapted from Next.js blog starter
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    // 'date',
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

export default Post;
