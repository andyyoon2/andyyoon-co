import Link from 'next/link';
import { getAllPosts } from '../lib';
import { formatDate } from '../lib/client-side';

const Post = ({ post, number }) => (
  <Link href={`/blog/${post.slug}`}>
    <a className="no-decoration">
      <div>
        <p className="number">{formatPostNumber(number)}</p>
        <h3 className="title">{post.title}</h3>
        <p className="description">{post.description}</p>
        <p className="date">{formatDate(post.date)}</p>
      </div>
    </a>
  </Link>
);

export default function Blog({ posts }) {
  return (
    <BlogMain>
      <div className="heading">
        <h1>Blog</h1>
        <h2>Sharing how I navigate life &amp; discovering myself in a new medium</h2>
      </div>
      {posts.map((post, index) => (
        <Post post={post} number={posts.length - index} key={post.slug} />
      ))}
    </BlogMain>
  );
}

// Formats numbers as 2-digits
function formatPostNumber(number) {
  const num = parseInt(number);
  if (num >= 10) {
    return number;
  } else {
    return '0' + number;
  }
}

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title', 'description', 'date'])

  return {
    props: {
      posts
    }
  }
}