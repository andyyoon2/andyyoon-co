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
    margin: 12rem 3rem;
    line-height: 1.5;
    h2 {
      font-variation-settings: 'wght' 600;
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
    .bold {
      font-size: 1.5em;
      font-variation-settings: 'wght' 600;
    }
    .highlight {
      background-color: ${({theme}) => theme.primary};
      font-variation-settings: 'wght' 525;
      padding: 2px;
    }
  }
`;

const Blurb = styled.section`
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
          <span className="line">a <span className="highlight">web developer</span> and <span className="highlight">musician</span> based in<br/>Los Angeles.</span>
        </h1>
      </Hero>
      <Blurb>
        <p>I live to bring joy to others' lives and to influence people to be their best.</p>
        <p>My mission is to work together with passionate people to make a positive contribution to the world.</p>
      </Blurb>
      <section>
        <h2>Work</h2>
        <List>
          <li><ListArrow /> Senior Frontend Engineer at EnterpriseAlumni</li>
          <li><ListArrow /> Resume ⟶</li>
        </List>
      </section>
      <section>
        <h2>Passion Projects</h2>
        <List>
          <li><ListArrow /> Guitarist and Bandleader at No Bathroom Breaks ⟶</li>
          <li><ListArrow /> Guitarist at Rory Seldon with InnerSession</li>
          <li><ListArrow /> iOS Developer at TapFive</li>
        </List>
      </section>
      <section>
        <h2>Let's connect</h2>
        <h3>How can we help each other achieve our goals?</h3>
        <Contact />
      </section>
    </Main>
  </Layout>
);

export default Home;
