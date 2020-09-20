import Link from 'next/link';
import { getAllPosts } from '../../lib';

const Blog = ({ posts }) => (
  <div>
    <h1>Blog</h1>
    <ul>
      {posts.map(post => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
    <Link href="/">Home</Link>
  </div>
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
