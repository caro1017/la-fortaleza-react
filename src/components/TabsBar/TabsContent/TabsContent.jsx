/* eslint-disable react/prop-types */
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import "./TabsContent.css";
// Informacion permitida para crear el contenido de cada tabs
const TabsContent = ({ title, time, people, price }) => {
  return (
    <>
      <div className="container-tabContent enter-from-left">
        <div className="title-tabsContent">
          <p>{title}</p>
          <span></span>
        </div>
        <div className="info-tabsContent">
          <div className="info-item">
            <AccessTimeIcon className="icon" />
            <p>{time}</p>
          </div>
          <div className="info-item">
            <PeopleIcon className="icon" />
            <p>{people}</p>
          </div>
          <div className="info-item">
            <RequestQuoteIcon className="icon" />
            <p>{price}</p>
          </div>
          <p>*No Incluye Alojamiento(Reserva Previa)</p>
        </div>
      </div>
    </>
  );
};

export default TabsContent;
