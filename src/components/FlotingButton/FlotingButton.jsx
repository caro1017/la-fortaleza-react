import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FlotingButton = ({ icon, className, onClick, href}) => {
  return (
    <>
      <div className={className}>
        <Link to={href}>
          <Fab color="success" size="small" onClick={onClick}>
            {icon}
          </Fab>
        </Link>
      </div>
    </>
  );
};

export default FlotingButton;
