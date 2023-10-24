import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Buttons = ({ text }) => {
  const styledButtons = {
    width: "8rem",
    fontWeight: 400,
  };

  return (
    <Button variant="contained" style={styledButtons} color="success">
      {text}
    </Button>
  );
};

export default Buttons;
