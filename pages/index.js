import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { Contact, Heading, Layout, YoonLink } from '../components';
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
    }
  }
`;

const Hero = styled.section`
  text-align: left;
  h1 {
    font-size: 1.5rem;
    span.line {
      display: block;
    }
    span.keep-together {
      display: inline-block;
    }
    .bold {
      font-size: 1.5em;
      font-variation-settings: 'wght' ${largeBoldWeight};
    }
    .highlight {
      background-color: ${({theme}) => theme.primary};
      font-variation-settings: 'wght' ${mediumBoldWeight};
      padding: 2px;
    }
  }
`;

const Blurb = styled.section`
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
          <span className="line">Welcome!</span>
          <span className="line">I'm <span className="bold">Andy Yoon</span>,</span>
          <span className="line">a <span className="highlight">web developer</span> and <span className="highlight">musician</span> based in <span className="keep-together">Los Angeles</span>.</span>
        </h1>
      </Hero>
      <Blurb>
        <p>I live to bring joy to others' lives and to influence people to be their best.</p>
        <p>My mission is to work together with like-minded people to make a positive contribution to the world.</p>
      </Blurb>
      <section>
        <h2>Work</h2>
        <List>
          <li><ListArrow /> Senior Frontend Engineer at <a href="https://enterprisealumni.com/">EnterpriseAlumni</a></li>
          <li><Link href="/resume">See Resume</Link> ⟶</li>
        </List>
      </section>
      <section>
        <h2>Passion Projects</h2>
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
