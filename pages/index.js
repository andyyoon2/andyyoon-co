import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Contact, Heading, Layout, YoonLink } from '../components';
import { breakpoints } from '../styles';

const largeBoldWeight = '600';
const mediumBoldWeight = '525';

const Main = styled.main`
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  position: relative;

  section {
    margin: 14rem 3rem;
    line-height: 1.5;
    h2 {
      font-variation-settings: 'wght' ${largeBoldWeight};
      text-align: center;
    }
  }
`;

const Hero = styled.section`
  // violet2 1 -> blue 2
  // background: linear-gradient(160deg, #fae8ff, #b2e9ff);
  text-align: left;
  // margin: 0 !important; // fix important later
  // padding: 14rem 3rem;
  h1 {
    font-size: 1.5rem;
    font-variation-settings: 'wght' 320;
    span.line {
      display: block;
    }
    span.keep-together {
      display: inline-block;
    }
    .greeting {
      font-size: 1.125rem;
    }
    .bold {
      font-variation-settings: 'wght' 720;
    }
  }
`;

const Work = styled.section`
  text-align: center;
  ul {
    text-align: left;
  }
  button {
    font-size: 1.125rem;
    margin-top: 3rem;
  }
`;

const Connect = styled.section`
  p {
    margin-bottom: 3em;
  }
`;

const List = styled.ul`
  padding-left: 1.25em;
  list-style: none;
  font-size: 1.25rem;
  li {
    position: relative;
    margin-bottom: 0.5em;
  }
`;
const StyledListArrow = styled.span`
  position: absolute;
  top: -0.37em;
  left: -0.75em;
  font-size: 1.5em;
`;
const ListArrow = () => <StyledListArrow>⪧</StyledListArrow>;

const Home = () => (
  <Layout currentPage="home">
    <Head>
      <title>Andy Yoon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Hero>
        <h1>
          <span className="line greeting">Hi, I'm Andy Yoon</span>
          <span className="line title">a <span className="bold">web developer</span> &amp; <span className="bold">musician</span> based in <span className="keep-together">Los Angeles</span></span>
        </h1>
        <p>My mission is to bring joy to others' lives and make a positive contribution to the world.</p>
      </Hero>
      <section>
      </section>
      <Work>
        <h2>Work</h2>
        <List>
          <li><ListArrow /> Senior Frontend Engineer at <a href="https://enterprisealumni.com/">EnterpriseAlumni</a></li>
        </List>
        <Button><Link href="/resume"><a className="no-decoration">View Resume</a></Link></Button>
      </Work>
      <section>
        <List>
          <li><ListArrow /> iOS Developer at <a href="https://tapfive.io/">TapFive</a></li>
          <li><ListArrow /> Guitarist and Bandleader at <a href="https://www.instagram.com/nobathroombreaks/">No Bathroom Breaks</a></li>
          <li><ListArrow /> Guitarist at <a href="http://roryseldon.com/index.html">Rory Seldon with InnerSession</a></li>
        </List>
      </section>
      <Connect>
        <h2>Let's Connect</h2>
        <p>How can we help each other achieve our goals?</p>
        <Contact />
      </Connect>
    </Main>
  </Layout>
);

export default Home;
