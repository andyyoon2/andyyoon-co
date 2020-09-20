import styled from 'styled-components';
import { Email, GitHub, Instagram, LinkedIn } from '../icons';

const links = [
  {
    href: 'mailto:ayoon212@hey.com',
    label: 'Email',
    icon: <Email />
  },
  {
    href: 'https://github.com/ayoon212',
    label: 'GitHub',
    icon: <GitHub />
  },
  {
    href: 'https://linkedin.com/in/andrew-yoon-845112105/',
    label: 'LinkedIn',
    icon: <LinkedIn />
  },
  {
    href: 'https://instagram.com/andyyoonn',
    label: 'Instagram',
    icon: <Instagram />
  },
];

const StyledContact = styled.section`
  svg {
    height: 3rem;
    width: 3rem;
  }
`;

const Contact = () => (
  <StyledContact>
    <h2>Let's Connect</h2>
    <div>
      {links.map(link => (
        <a key={link.label} href={link.href} title={link.label}>{link.icon ? link.icon : link.label}</a>
      ))}
    </div>
  </StyledContact>
);

export default Contact;
