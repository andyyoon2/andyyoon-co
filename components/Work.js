import Box from '@mui/material/Box';
import { Bold } from './shared';

const WorkLine = ({ title, place, url }) => (
  <Box>
    <Box component="p">
      <Bold>{title}</Bold>, <Box component="a" href={url} target="_blank">{place}</Box>
    </Box>
  </Box>
);

export default function Work() {
  return (
    <section>
      <Box
        component="h3"
        className="serif"
        sx={{ fontSize: '1.25rem', fontWeight: 'normal' }}
      >
        Experience
      </Box>
      <WorkLine
        title="Lead Software Engineer"
        place="EnterpriseAlumni"
        url="https://enterprisealumni.com/"
      />
      <WorkLine
        title="Senior Frontend Developer"
        place="Hyundai AutoEver America"
        url="https://www.autoeveramerica.com/"
      />
      {/* <WorkLine
        title="iOS Developer"
        place="TapFive"
        url="https://tapfive.dev/"
      /> */}
    </section>
  );
}
