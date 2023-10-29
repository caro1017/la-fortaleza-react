import "./title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ color, title, linePosition }) => {
  const titleStyle = {
    color: color,
  };

  const spanStyle = {
    backgroundColor: color,
  };

  return (
    <>
      <div className="container-title">
        {linePosition === "left" || linePosition === "both" ? (
          <span className="linea-horizontal" style={spanStyle}></span> // Línea izquierda
        ) : null}
        <h2 className="title-styled" style={titleStyle}>
          {title}
        </h2>
        {linePosition === "right" || linePosition === "both" ? (
          <span className="linea-horizontal" style={spanStyle}></span> // Línea derecha
        ) : null}
      </div>
    </>
  );
};

export default Title;
