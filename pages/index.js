import Head from 'next/head';
import Link from 'next/link';
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
  section {
    margin: 10rem 3rem;
  }
`;

const Hero = styled.section`
  text-align: left;
  .name {
    font-size: 3rem;
    font-variation-settings: 'wght' 600;
    margin: 0;
  }
  .greeting {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  img.headshot {
    width: 180px;
    margin: 0 auto;
    // slight correction for background lines in the image
    transform: rotate(-2deg);
  }
`;

const Blurb = styled.section`
  p {
    line-height: 1.5;
  }
  a {
    color: inherit;
    font-variation-settings: 'wght' 525;
    background-color: #42c9ff;
  }
`;


const oldStyles = `
  .content {
    // background-color: #fff;
    position: relative;
    text-align: center;
    &.top {
      padding: ${shapeSpacing};
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
    p {
      line-height: 1.5;
      padding: 0 2.125rem;
      text-align: left;
    }
    a {
      color: inherit;
      font-variation-settings: 'wght' 525;
      background-color: #42c9ff;
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
      <Hero>
        <img className="headshot" src="/images/andy-cropped.jpg" alt="Andy Yoon" />
        <p className="greeting">Welcome! My name is</p>
        <Heading tag="h1" className="name">Andy Yoon</Heading>
      </Hero>
      <Blurb>
        <p>I'm a <Link href="resume">web developer</Link> and <Link href="portfolio">musician</Link> who lives to bring joy to others' lives and to influence people to be their best.</p>
        <p>My mission is to work together with passionate people to make a tangible, positive contribution to the world.</p>
        <p>Check out my work here</p>
        <p>[contact section] I'm always open to discuss collabs on new projects!</p>
      </Blurb>

      <div className="content">
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
