import FlotingButton from "../../components/FlotingButton/FlotingButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./SeparatorSection.css";

// eslint-disable-next-line react/prop-types
const SeparatorSection = ({ src }) => {
  return (
    <>
      <img
        src={src}
        alt="imagen_separator_finca"
        className="container-separator"
      />
      <span className="container-icon-separator">
        <div className="icon-separator">
          <FlotingButton
            icon={<WhatsAppIcon />}
            href="https://api.whatsapp.com/send?phone=573124026944&text=Hola, Nececito mas informacion!"
          />
        </div>
      </span>
    </>
  );
};

export default SeparatorSection;
