import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/layout';

const shapeSpacing = '1.5rem';
const shapeSize = '50px';

const Main = styled.main`
  img {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: -1;
  }
  .content {
    background-color: #fff;
    color: #000;
    position: relative;
    text-align: center;
    h1, h2, h3 {
      // font-weight: 300;
    }
    &.top {
      padding: ${shapeSpacing} 0;
      h1 {
        margin-top: 0;
      }
      h3 {
        margin-bottom: 0;
      }
    }
  }
  .content-shape {
    position: absolute;
    &.trailing {
      border-top: ${shapeSize} solid #fff;
      border-left: 100vw solid transparent;
      bottom: 0;
      transform: translateY(100%);
    }
    &.leading {
      border-bottom: ${shapeSize} solid #fff;
      border-right: 100vw solid transparent;
      top: 0;
      transform: translateY(-100%);
    }
  }
  .site-map {
    padding-top: ${shapeSpacing};
    a {
      display: inline-block;
      color: #000;
      font-size: 2.75rem;
      margin-bottom: 1em;
      text-decoration-color: ${({theme}) => theme.primary};
      text-decoration-thickness: 4px;
      transition: all 0.2s ease-in-out;
      :hover {
        text-decoration-color: ${({theme}) => theme.secondary};
      }
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
      <div className="content top">
        <h1>Andy Yoon</h1>
        <h2>Web Developer, Musician</h2>
        <h3>Senior Frontend Engineer at EnterpriseAlumni</h3>
        <div className="content-shape trailing"></div>
      </div>

      <img src="/images/hero.jpg" alt="Andy Yoon" />

      <div className="content">
        <div className="content-shape leading"></div>
        <div className="site-map">
          <div><Link href="resume"><a>Resume</a></Link></div>
          <div><Link href="portfolio"><a>Portfolio</a></Link></div>
          <div><Link href="blog"><a>Blog</a></Link></div>
        </div>

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
