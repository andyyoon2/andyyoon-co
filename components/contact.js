import styled from 'styled-components';
import Heading from './heading';
import { Email, GitHub, Instagram, LinkedIn } from '../icons';
import { transitionDurationEasing } from '../styles';

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
    href: 'https://instagram.com/andyyoonn',
    label: 'Instagram',
    icon: <Instagram />
  },
  {
    href: 'https://linkedin.com/in/andrew-yoon-845112105/',
    label: 'LinkedIn',
    icon: <LinkedIn />
  },
];

const StyledContact = styled.div`
  text-align: center;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    height: 3rem;
    width: 3rem;
    transition: all ${transitionDurationEasing};
    &:hover {
      fill: ${({theme}) => theme.primaryDark};
    }
  }
`;

const Contact = () => (
  <StyledContact>
    <div className="links">
      {links.map(link => (
        <a key={link.label} href={link.href} title={link.label}>{link.icon ? link.icon : link.label}</a>
      ))}
    </div>
  </StyledContact>
);

export default Contact;
