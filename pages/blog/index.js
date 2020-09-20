import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllPosts } from '../../lib';

const Blog = ({ posts }) => (
  <Layout>
    <h1>Blog</h1>
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
