const Heading = ({ children, tag }) => {
  switch (tag) {
    case 'h1': return <h1>{children}</h1>
    case 'h2': return <h2>{children}</h2>
    case 'h3': return <h3>{children}</h3>
    case 'h4': return <h4>{children}</h4>
    case 'h5': return <h5>{children}</h5>
    default: return <></>
  }
};

export default Heading;
