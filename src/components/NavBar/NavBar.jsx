import "./NavBar.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Images } from "../../Images/Images";

import HomePage from "../../pages/HomePage/HomePage";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import BookingPage from "../../pages/BookingPage/BookingPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import ContactPage from "../../pages/ContactPage/ContactPage";

import {
  AppBar,
  Box,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  //Control de estado para posicionamiento del menu en escritorio
  const [state, setState] = useState({ right: false });
  // Funcion para controlar estado y abrir el menu en tamaños pequeños de material ui
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // Listado de el menu para renderizar en tamaños pequeños
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="nav-container-movil"
    >
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
    </Box>
  );
  // Controlar el media queries del menu
  const isMobileOrTablet = useMediaQuery("(max-width: 769px)");

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" elevation={0}>
          <Toolbar className="nav-container">
            <Hidden mdUp={!isMobileOrTablet}>
              <div>
                {/* mapear el menu para asi ser mas optimo la visualizacion */}
                {["right"].map((anchor) => (
                  <div key={anchor}>
                    <IconButton
                      size="large"
                      edge="start"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={toggleDrawer(anchor, true)}
                      color="success"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </div>
                ))}
              </div>
            </Hidden>

            <div className="nav-logo-container">
              <Link to="/">
                <img
                  src={Images.logo}
                  alt="logo la fortaleza"
                  className="nav-logo"
                />
              </Link>
            </div>

            <div className="nav-container-desktop">
              <ul className="nav-left">
                <Link to="/Nosotros">
                  <li>Nosotros</li>
                </Link>
                <Link to="/Servicios">
                  <li>Servicios</li>
                </Link>
              </ul>

              <ul className="nav-right">
                <Link to="/Reservas">
                  <li>Reservas</li>
                </Link>
                <Link to="/Contactenos">
                  <li>Contactenos</li>
                </Link>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Uso del hook react route y tener una single page mas optima */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Nosotros" element={<AboutUsPage />} />
        <Route path="/Servicios" element={<ServicesPage />} />
        <Route path="/Reservas" element={<BookingPage />} />
        <Route path="/Contactenos" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default NavBar;
