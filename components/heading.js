const Heading = ({ children, tag, ...rest }) => {
  switch (tag) {
    case 'h1': return <h1 {...rest}>{children}</h1>
    case 'h2': return <h2 {...rest}>{children}</h2>
    case 'h3': return <h3 {...rest}>{children}</h3>
    case 'h4': return <h4 {...rest}>{children}</h4>
    case 'h5': return <h5 {...rest}>{children}</h5>
    default: return <></>
  }
};

export default Heading;
