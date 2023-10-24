import { Images } from "../../images/Images";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="container-logo-footer">
          <img src={Images.logo} alt="" />
          <h5>La Fortaleza</h5>
          <span>-----</span>
          <h5>Finca Ecolodge</h5>
        </div>
        <span>|</span>
        <div className="menu-footer">
          <ul>
            <a href="">
              <li>Inicio</li>
            </a>
            <a href="">
              <li>Nosotros</li>
            </a>
            <a href="">
              <li>Servicios</li>
            </a>
            <a href="">
              <li>Reservas</li>
            </a>
            <a href="">
              <li>Contactenos</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="container-autor">
        <h3>Autores</h3>
      </div>
    </>
  );
};

export default Footer;
