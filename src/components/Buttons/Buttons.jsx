/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Entradas permitidas
const Buttons = ({ text, href, onClick, type }) => {
  //Estilos genericos del boton
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
