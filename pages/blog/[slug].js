import Link from 'next/link';
import styled from 'styled-components';
import { Heading, Layout } from '../../components';
import { getPostBySlug, getAllPosts, markdownToHtml } from '../../lib';

const BlogPost = styled.main`
  max-width: 680px;
  margin-left: 2rem;
  margin-right: 2rem;

  h1, .content {
    font-family: 'Lora', 'Times New Roman', serif;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-size: ${({theme}) => theme.h1FontSize};
  }
  .heading, .content {
    margin-bottom: 10rem;
  }
  // TODO: DRY - Copied description and date styles from parent component
  .description {
    color: ${({theme}) => theme.darkGray};
    font-size: 1.125rem;
    font-variation-settings: 'wght' 420;
  }
  .date {
    color: ${({theme}) => theme.darkGray};
    font-variation-settings: 'wght' 320;
    margin-bottom: 0;
  }
  .content {
    font-size: 1.25rem;
    p {
      margin: 2em 0;
    }
  }
`;

const Post = ({ post }) => (
  <Layout currentPage="blog">
    <BlogPost>
      <div className="heading">
        <h1>{post.title}</h1>
        <h2 className="description">{post.description}</h2>
        <p className="date">{post.date}</p>
      </div>
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
