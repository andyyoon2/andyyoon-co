import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styled from 'styled-components';

const Main = styled.main`
  img {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: -1;
  }
  .spacer {
    height: 180px;
  }
  .content {
    background-color: #fff;
    color: #000;
    position: relative;
    text-align: center;
  }
  .content-shape {
    position: absolute;
    &.trailing {
      border-top: 50px solid #fff;
      border-left: 100vw solid transparent;
      bottom: 0;
      transform: translateY(100%);
    }
    &.leading {
      border-bottom: 50px solid #fff;
      border-right: 100vw solid transparent;
      top: 0;
      transform: translateY(-100%);
    }
  }
`;

const Home = () => (
  <Layout>
    <Head>
      <title>Andy Yoon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <div className="content">
        <h1>Andy Yoon</h1>
        <h2>Web Developer, Musician</h2>
        <h3>Senior Frontend Engineer at EnterpriseAlumni</h3>
        <div className="content-shape trailing"></div>
      </div>
        
      <img src="/images/hero.jpg" alt="Andy Yoon" />
      
      <div className="content">
        <div className="content-shape leading"></div>
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
      </div>
    </Main>
  </Layout>
);

export default Home;
