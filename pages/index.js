import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

const Home = () => (
  <Layout>
    <Head>
      <title>Andy Yoon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Andy Yoon</h1>
    <h2>Web Developer, Musician</h2>
    <h3>Senior Frontend Developer at EnterpriseAlumni</h3>
    <Link href="resume"><a>Resume</a></Link>
    <Link href="portfolio"><a>Portfolio</a></Link>
    <Link href="blog"><a>Blog</a></Link>

    <h2>Contact n stuff</h2>
    <div>
      <a href="mailto:ayoon212@hey.com" target="_blank" rel="noopener noreferrer">ayoon212@hey.com</a>
      <a href="https://github.com/ayoon212">GitHub</a>
      <a href="https://linkedin.com/in/andrew-yoon-845112105/">LinkedIn</a>
      <a href="https://instagram.com/andyyoonn">Instagram</a>
    </div>
  </Layout>
);

export default Home;
