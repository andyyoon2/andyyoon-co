import Head from 'next/head';
import styled from 'styled-components';
import { Contact, Heading, Layout, YoonLink } from '../components';
import { breakpoints } from '../styles';

const shapeSpacing = '1.5rem';
const shapeSize = '50px';

const Main = styled.main`
  min-height: 100vh;
  max-width: 1200px;
  margin-left: auto;
  position: relative;
  img {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: -1;
    @media (min-width: ${breakpoints.tablet}) {
      position: absolute;
      left: 50%;
      width: 50%;
      height: 100%;
      object-fit: cover;
      object-position: center 13%;
    }
  }
  .content {
    background-color: #fff;
    color: #000;
    position: relative;
    text-align: center;
    h1, h2, h3 {
      font-weight: 400;
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

    @media (min-width: ${breakpoints.tablet}) {
      width: 50%;
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
    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
  .site-map {
    padding-top: ${shapeSpacing};
    a {
      display: inline-block;
      color: #000;
      font-size: 2.75rem;
      margin-bottom: 1em;
    }
  }
`;

const Home = () => (
  <Layout padding={false}>
    <Head>
      <title>Andy Yoon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <div className="content top">
        <Heading tag="h1">Andy Yoon</Heading>
        {/* <h2>Web Developer, Musician</h2>
        <h3>Senior Frontend Engineer at EnterpriseAlumni</h3> */}
        <div className="content-shape trailing"></div>
      </div>

      <img src="/images/hero.jpg" alt="Andy Yoon" />

      <div className="content">
        <div className="content-shape leading"></div>
        <div className="site-map">
          <div><YoonLink href="resume">Resume</YoonLink></div>
          <div><YoonLink href="portfolio">Portfolio</YoonLink></div>
          <div><YoonLink href="blog">Blog</YoonLink></div>
          <div><YoonLink href="blog">Dog</YoonLink></div>
        </div>

        <Contact />
      </div>
    </Main>
  </Layout>
);

export default Home;
