import { Fab } from "@mui/material";

// eslint-disable-next-line react/prop-types
const FlotingButton = ({ icon, className, onClick }) => {
  return (
    <>
      <div className={className}>
        <Fab color="success" size="small" onClick={onClick}>
          {icon}
        </Fab>
      </div>
    </>
  );
};

export default FlotingButton;
