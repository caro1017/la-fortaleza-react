import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Buttons = ({ text, href, onClick, type }) => {
  const styledButtons = {
    width: "8rem",
    fontWeight: 400,
  };

  return (
    <>
      <Link to={href}>
        <Button
          variant="contained"
          style={styledButtons}
          color="success"
          onClick={onClick}
          type={type}
        >
          {text}
        </Button>
      </Link>
    </>
  );
};

export default Buttons;
