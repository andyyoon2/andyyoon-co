import Link from 'next/link';
import styled from 'styled-components';
import { Layout } from '../../components';
import { getAllPosts } from '../../lib';

const BlogMain = styled.main`
  margin: 0 3rem;
  margin-top: 12rem;

  .heading {
    margin-bottom: 6rem;
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
  a {
    display: inline-block;
    width: 100%;
  }
  .post-card {
    border: 1px solid ${({theme}) => theme.lightGray};
    border-radius: 2px;
    cursor: pointer;
    font-variation-settings: 'wght' 420;
    padding: 0.5em 1em;
    transition: all 0.2s ease-out;
    
    &:hover {
      box-shadow: 0px 3px 5px ${({theme}) => theme.lightGray};
      transform: translateY(-1px);
    }
  }

  .title {
    font-size: 1.5rem;
    font-variation-settings: 'wght' 320;
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  .description {
    
  }
  .date {
    color: ${({theme}) => theme.darkGray};
    font-size: 0.875rem;
    margin-bottom: 0;
  }
`;

const Post = ({ post }) => (
  <PostWrapper>
    <Link href={`/blog/${post.slug}`}>
      <a className="no-decoration">
        <div>{/* <div className="post-card"> */}
          <h3 className="title">{post.title}</h3>
          <p className="description">{post.description}</p>
          <p className="date">{parseDate(post.date)}</p>
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
      {posts.map(post => (
        <Post post={post} key={post.slug} />
      ))}
    </BlogMain>
  </Layout>
);

function parseDate(dateString) {
  // Assumes dateString is in format "YYYY-MM-DD"
  const dateParts = dateString.split('-');
  const date = new Date();
  date.setFullYear(dateParts[0]);
  date.setMonth(parseInt(dateParts[1]) - 1); // month is 0-indexed
  date.setDate(dateParts[2]);
  return date.toDateString();
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
