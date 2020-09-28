import { Heading, Layout } from '../components';
import { resume } from '../data/resume';
import styled from 'styled-components';

const StyledResume = styled.main`
  .resume {
    .company {
      font-variation-settings: 'wght' 700;
    }
    .location {
      font-variation-settings: 'slnt' -10;
    }
  }
`;

const Resume = () => (
  <Layout currentPage="resume">
    <StyledResume>
      <Heading tag="h1">Resume</Heading>
      <Heading tag="h2">Senior Front End Engineer at EnterpriseAlumni</Heading>
      <div className="resume">
      {resume.sections.map(section => (
        <section key={section.heading}>
          <Heading tag="h3">{section.heading}</Heading>
          {section.subsections.length > 0 &&
          <ul>
            {section.subsections.map(subsection => <li key={subsection}>{subsection}</li>)}
          </ul>}
        </section>
      ))}

      {/* Experience */}
      <section>
        <Heading tag="h3">{resume.experience.heading}</Heading>
        {resume.experience.sections.map(section => (
          <React.Fragment key={section.company}>
            <p>
              <span className="company">{section.company} </span>
              <span className="location">{section.location}</span>
            </p>
            <p>{section.jobTitle} {section.date}</p>
            {section.subsections.length > 0 &&
            <ul>
              {section.subsections.map(subsection => <li key={subsection}>{subsection}</li>)}
            </ul>}
          </React.Fragment>
        ))}
      </section>
      </div>
    </StyledResume>
  </Layout>
);

export default Resume;
