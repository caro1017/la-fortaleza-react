import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FlotingButton from "../../components/FlotingButton/FlotingButton";

import "./HeaderSection.css";

// eslint-disable-next-line react/prop-types
const HeaderSection = ({ src, title }) => {
  return (
    <>
      <div className="container-header">
        <img rel="preload" src={src} alt="imgHeader" className="styleImg" />
        <h1 className="styleTitle">{title}</h1>
        <div className="icon-header">
          <FlotingButton
            icon={<WhatsAppIcon />}
            href="https://api.whatsapp.com/send?phone=573124026944&text=Hola, Nececito mas informacion!"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
