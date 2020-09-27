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
  img.bg-image {
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
    position: relative;
    text-align: center;
    // h1, h2, h3 {
    //   font-weight: 400;
    // }
    &.top {
      padding: ${shapeSpacing};
    }

    @media (min-width: ${breakpoints.tablet}) {
      width: 50%;
    }
  }
  .content-shape {
    position: absolute;
    left: 0;
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
      color: inherit;
      font-size: 2.75rem;
      margin-bottom: 1em;
    }
  }
  .hero-text {
    .name {
      font-size: 3rem;
      font-variation-settings: 'wght' 600;
      margin-top: 0;
    }
    .greeting {
      margin-bottom: 0;
      margin-left: 0.375rem;
    }
    p {
      line-height: 1.5;
      padding: 0 2.125rem;
      text-align: left;
    }
    img.headshot {
      width: 240px;
      margin: 0 auto;
      margin-bottom: 1rem;
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
      <div className="content top hero-text">
        <p className="greeting">Welcome! My name is</p>
        <Heading tag="h1" className="name">Andy Yoon</Heading>
        <img className="headshot" src="/images/andy-cropped.png" alt="Andy Yoon" />
        <p>I'm a web developer and musician who lives to bring joy to others' lives and to influence people to be their best.</p>
        <p>My mission is to work together with passionate people to make a tangible, positive contribution to the world.</p>
        <p>Check out my work here</p>
        <p>[contact section] I'm always open to discuss collabs on new projects!</p>
        {/*<div className="content-shape trailing"></div>*/}
      </div>

      <div className="content">
        {/*<div className="content-shape leading"></div>*/}
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
