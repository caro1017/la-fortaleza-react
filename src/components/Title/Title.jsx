import "./title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ color, title }) => {
  const titleStyle = {
    color: color,
  };

  const spanStyle = {
    backgroundColor: color,
  };

  return (
    <>
      <div className="container-title">
        <span className="linea-horizontal" style={spanStyle}></span>
        <h2 className="title-styled" style={titleStyle}>
          {title}
        </h2>
        <span className="linea-horizontal" style={spanStyle}></span>
      </div>
    </>
  );
};

export default Title;
