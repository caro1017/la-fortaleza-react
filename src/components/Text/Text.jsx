// eslint-disable-next-line react/prop-types
const Text = ({ text, color, textAlign }) => {
  const styledText = {
    color: color,
    textAlign: textAlign,
    padding: "1rem",
  };

  return <p style={styledText}>{text}</p>;
};

export default Text;
