import Link from 'next/link';
import { Heading, Layout } from '../components';
import { getAllPosts } from '../../lib';

const Blog = ({ posts }) => (
  <Layout>
    <Heading tag="h1">Blog</Heading>
    <ul>
      {posts.map(post => (
        <li key={post.slug}><Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link></li>
      ))}
    </ul>
  </Layout>
);

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title'])

  return {
    props: {
      posts
    }
  }
}

export default Blog;
