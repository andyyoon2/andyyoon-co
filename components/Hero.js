import Image from 'next/image';
import Box from '@mui/material/Box';

const KeepTogether = ({ children }) => (
  <Box component="span" sx={{ display: 'inline-block' }}>{children}</Box>
);

const Bold = ({ children }) => (
  <Box component="strong" sx={{
    fontWeight: 600,
  }}>{children}</Box>
);


const WorkLine = ({ title, place, url }) => (
  <Box>
    <Box component="p" sx={{
      // fontWeight: 400
    }}>
      <Bold>{title}</Bold>
      <Box component="a" href={url} target="_blank" sx={{ display: 'block' }}>{place}</Box>
    </Box>
  </Box>
);

export default function Hero() {
  return (
    <>
      <Box sx={{ marginTop: '4rem' }}>
        <Box component="h3" sx={{
          fontWeight: 300,
          fontSize: '1.75rem',
        }}>
          Hi, I'm <KeepTogether>Andy Yoon</KeepTogether>
        </Box>
        <Box component="h1" sx={{
          fontWeight: 350,
          fontSize: '2rem',
        }}>
          <Bold>Web developer</Bold> &amp; <Bold>musician</Bold> based in
          <KeepTogether>Los Angeles</KeepTogether>
        </Box>
        <Box component="h2" sx={{
          fontWeight: 300,
          fontSize: '1.25rem',
          fontStyle: 'italic',
        }}>
          My mission is to use my skills to serve others and make a tangible positive contribution to the world.
        </Box>

        <section>
          <h3>Work</h3>
          <WorkLine
            title="Lead Software Engineer"
            place="EnterpriseAlumni"
            url="https://enterprisealumni.com/"
          />
          <WorkLine
            title="iOS Developer"
            place="TapFive"
            url="https://tapfive.dev/"
          />
          <WorkLine
            title="Guitarist and Bandleader"
            place="No Bathroom Breaks"
            url=""
          />
        </section>
      </Box>
    </>
  );
}
