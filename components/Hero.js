import Image from 'next/image';
import Box from '@mui/material/Box';

import nbbAlbum from '../public/images/nbb-album.jpg';
import eaLogo from '../public/images/ea-logo.png';

const KeepTogether = ({ children }) => (
  <Box component="span" sx={{ display: 'inline-block' }}>{children}</Box>
);

const Heading1 = ({ children }) => (
  <Box component="h1" sx={{
    fontWeight: 300,
  }}>{children}</Box>
);

const Heading2 = ({ children }) => (
  <Box component="h2" sx={{
    fontWeight: 400,
    fontStyle: 'italic',
  }}>{children}</Box>
);

const Section = ({ children }) => (
  <Box component="section" sx={{
    background: 'linear-gradient(blue, purple)',
    height: '400px',
  }}>
    {children}
  </Box>
);

const WorkSection = ({ title, place, url, src }) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: { xs: 'wrap', md: 'normal' },
  }}>
    <Box sx={{
      flex: { xs: '1 0 100%', sm: '1 0 50%' },
      // maxWidth: '200px',
    }}>
      <Image class="company-logo" src={src} alt="" />
    </Box>
    <Box component="h3" sx={{
      flex: '1 0 50%',
    }}>
      <h3>{title} at <a href={url} target="_blank">{place}</a></h3>
    </Box>
  </Box>
);

export default function Hero() {
  return (
    <>
      <Box>
        <Heading1>Welcome! I'm <KeepTogether>Andy Yoon</KeepTogether></Heading1>
        <Heading2>
          <span>A web developer and musician based in </span>
          <KeepTogether>Los Angeles</KeepTogether>
        </Heading2>

        <section>
          <WorkSection
            title="Lead Software Engineer"
            place="EnterpriseAlumni"
            url="https://enterprisealumni.com/"
            src={eaLogo}
          />
          <WorkSection
            title="iOS Developer"
            place="TapFive"
            url="https://tapfive.dev/"
            src={nbbAlbum}
          />
          <WorkSection
            title="Guitarist and Bandleader"
            place="No Bathroom Breaks"
            url=""
            src={nbbAlbum}
          />
        </section>
      </Box>
    </>
  );
}
