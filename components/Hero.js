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


const WorkSection = ({ title, place, url, src }) => (
  <Box>
    <Box component="h3" sx={{
      fontWeight: 400,
    }}>
      {title} at <a href={url} target="_blank">{place}</a>
    </Box>
  </Box>
);

export default function Hero() {
  return (
    <>
      <Box>
        <Box component="h1" sx={{
          fontWeight: 300,
          fontSize: '1.75rem',
        }}>
          Hi, I'm <KeepTogether>Andy Yoon</KeepTogether>
        </Box>
        <Box component="h2" sx={{
          fontWeight: 350,
          fontSize: '2rem',
        }}>
          <Bold>Web developer</Bold> &amp; <Bold>musician</Bold> based in
          <KeepTogether>Los Angeles</KeepTogether>
        </Box>

        <section>
          <WorkSection
            title="Lead Software Engineer"
            place="EnterpriseAlumni"
            url="https://enterprisealumni.com/"
          />
          <WorkSection
            title="iOS Developer"
            place="TapFive"
            url="https://tapfive.dev/"
          />
          <WorkSection
            title="Guitarist and Bandleader"
            place="No Bathroom Breaks"
            url=""
          />
        </section>
      </Box>
    </>
  );
}
