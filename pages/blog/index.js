import Link from 'next/link';
import styled from 'styled-components';
import { Layout } from '../../components';
import { getAllPosts } from '../../lib';

const BlogMain = styled.main`
  margin: 0 3rem;
  margin-top: 8rem;

  .heading {
    margin-bottom: 8rem;
  }
  h1 {
    margin: 2rem 0;
    font-variation-settings: 'wght' 720;
  }
  h2 {
    font-variation-settings: 'wght' 320;
  }
`;

const PostWrapper = styled.div`
  margin-bottom: 6rem;
  position: relative;
  a {
    display: inline-block;
    width: 100%;
  }

  .title {
    font-size: 1.5rem;
    font-variation-settings: 'wght' 620;
    margin-top: 0;
    margin-bottom: 1em;
  }
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
  .number {
    color: ${({theme}) => theme.lightGray};
    opacity: 0.7;
    font-size: 4rem;
    margin: 0;
    position: absolute;
    top: -0.18em;
    left: -1.75em;
    z-index: -1;
  }
`;

const Post = ({ post, number }) => (
  <PostWrapper>
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
  </PostWrapper>
);

const Blog = ({ posts }) => (
  <Layout currentPage="blog">
    <BlogMain>
      <div className="heading">
        <h1>Blog</h1>
        <h2>Thoughts about life and stuff</h2>
      </div>
      {posts.map((post, index) => (
        <Post post={post} number={posts.length - index} key={post.slug} />
      ))}
    </BlogMain>
  </Layout>
);

// Assumes dateString is in format "YYYY-MM-DD"
function formatDate(dateString) {
  const dateParts = dateString.split('-');
  const date = new Date();
  date.setFullYear(dateParts[0]);
  date.setMonth(parseInt(dateParts[1]) - 1); // month is 0-indexed
  date.setDate(dateParts[2]);
  return date.toDateString();
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

export default Blog;
