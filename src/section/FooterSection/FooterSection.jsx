import { Images } from "../../Images/Images";
import { Link } from "react-router-dom";
import "./FooterSection.css";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterSection = () => {
  return (
    <footer>
      <div className="container-footer">
        <div>
          <img src={Images.logo} alt="imagen logo" />
          <h2>La fortaleza</h2>
          <span className="line-horizontal-footer"></span>
          <p>Finca Ecolodge</p>
        </div>

        <div className="line-vertical-footer">
          <span></span>
        </div>

        <div className="container-menu-footer">
          <div>
            <ul>
              <Link to="/">
                <li>Inicio</li>
              </Link>
              <Link to="/Nosotros">
                <li>Nosotros</li>
              </Link>
              <Link to="/Servicios">
                <li>Servicios</li>
              </Link>
              <Link to="/Reservas">
                <li>Reservas</li>
              </Link>
              <Link to="/Contactenos">
                <li>Contactenos</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-social-media">
        <div className="social-media-footer">
          <Link to="https://api.whatsapp.com/send?phone=573124026944&text=Hola, Nececito mas informacion!">
            <WhatsAppIcon />
          </Link>
          <Link to="https://www.instagram.com/fincalafortalezaecobio/?hl=es">
            <InstagramIcon />
          </Link>
          <Link to="https://www.google.com/maps/place/Ecolodge+La+Fortaleza/@6.8448779,-70.7210129,17z/data=!3m1!4b1!4m5!3m4!1s0x8e6fc9b9e70fd659:0x93ece5ea8c368d58!8m2!3d6.8448779!4d-70.7210129">
            <RoomIcon />
          </Link>
          <Link to="https://www.facebook.com/FincaEcolodgeLaFortaleza">
            <FacebookIcon />
          </Link>
        </div>
        <div className="autor-footer">
          <Link to="https://github.com/caro1017">
            <p>
              Copyright © 2022 by <span>Carolina Uribe Botero</span>
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
