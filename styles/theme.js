const hue = 197;

const lightBlue = `hsl(${hue}, 100%, 63%)`;
const darkBlue = `hsl(${hue}, 100%, 32%)`;
const lightYellow = `hsl(47, 100%, 63%)`;

const lightGray = `hsl(${hue}, 12%, 85%)`;
const mediumGray = `hsl(${hue}, 11%, 62%)`;
const darkGray = `hsl(${hue}, 8%, 40%)`;
const black = `hsl(${hue}, 7%, 16%)`;
const white = `hsl(${hue}, 12%, 98%)`;

// Text styles
const h1FontSize = '3rem';
const h2FontSize = '1.5rem';

const theme = {
  primary: lightBlue,
  primaryDark: darkBlue,
  secondary: lightYellow,
  mediumGray: mediumGray,
  lightGray: lightGray,
  darkGray: darkGray,
  black: black,
  white: white,
  h1FontSize: h1FontSize,
  h2FontSize: h2FontSize,
};

export default theme;
