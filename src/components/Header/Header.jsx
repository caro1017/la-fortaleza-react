import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Fab } from "@mui/material";
import "./header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ src, title }) => {
  return (
    <div className="container-header">
      <img rel="preload" src={src} alt="imgHeader" className="styleImg" />
      <h1 className="styleTitle">{title}</h1>
      <Fab
        color="success"
        size="small"
        className="icon-header"
        position="fixed"
      >
        <WhatsAppIcon />
      </Fab>
    </div>
  );
};

export default Header;
