import Link from 'next/link';

const Home = () => (
  <div>
    <h1>andyyoon.co</h1>
    <Link href="resume"><a>Resume</a></Link>
    <Link href="portfolio"><a>Portfolio</a></Link>
    <Link href="blog"><a>Blog</a></Link>
  </div>
);

export default Home;
