import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <>
    <Head>
      <title>Andy Yoon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>andyyoon.co</h1>
    <Link href="resume"><a>Resume</a></Link>
    <Link href="portfolio"><a>Portfolio</a></Link>
    <Link href="blog"><a>Blog</a></Link>
  </>
);

export default Home;
