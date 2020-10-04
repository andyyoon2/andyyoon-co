import Link from 'next/link';
import styled from 'styled-components';
import { Heading, Layout } from '../../components';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib';

const BlogPost = styled.main`
  max-width: 680px;
  margin: 0 auto;

  .content {
    font-family: 'Lora', 'Times New Roman', serif;
    font-size: 1.25rem;
    padding: 1em;
  }
`;

const Post = ({ post }) => (
  <Layout currentPage="blog">
    <BlogPost>
      <Heading tag="h1">{post.title}</Heading>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <Link href="/blog">← See all posts</Link>
    </BlogPost>
  </Layout>
);

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

export default Post;
