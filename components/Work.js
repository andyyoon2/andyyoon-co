import Box from '@mui/material/Box';
import { Bold } from './shared';

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
      {/*<WorkLine
        title="Guitarist and Bandleader"
        place="No Bathroom Breaks"
        url="https://instagram.com/nobathroombreaks"
      />*/}
    </section>
  );
}
