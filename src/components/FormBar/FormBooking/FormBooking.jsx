import { useState } from "react";
import InputsBar from "../../InputsBar/InputsBar";
import Buttons from "../../Buttons/Buttons";
import FlotingButton from "../../FlotingButton/FlotingButton";
import ValidationForm from "../ValidationForm/ValidationForm";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PeopleIcon from "@mui/icons-material/People";
import CheckIcon from "@mui/icons-material/Check";

import {
  Alert,
  FormControl,
  Menu,
  MenuItem,
  Modal,
  Snackbar,
} from "@mui/material";
import "./FormBooking.css";

const FormBooking = () => {
  //Control de estados para la entrada de los inputs
  const [entryDate, setentryDate] = useState("");
  const [departureDate, setdepartureDate] = useState("");
  const [amountPeople, setamountPeople] = useState("");
  const [typeService, setTypeService] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  // Control estado del Modal
  const [openModal, SetOpenModal] = useState(false);
  // Control estado para uso del Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // Funcion para abrir el menu de seleccion
  const handleMenuClick = (selectedOption) => {
    setTypeService(selectedOption);
    handleClose();
  };

  const handleOpenModal = () => {
    // validacion es adecuada abrir model de lo contrario abrir Snackbar
    if (!entryDate || !departureDate || !amountPeople || !typeService) {
      setOpenSnackbar(true);
    } else {
      const currentDate = new Date();
      const selectedEntryDate = new Date(entryDate);
      const selectedDepartureDate = new Date(departureDate);

      if (
        selectedEntryDate >= currentDate &&
        selectedDepartureDate >= currentDate
      ) {
        SetOpenModal(true);
        setOpenSnackbar(false);
      } else {
        setOpenSnackbar(true);
      }
    }
  };

  const handleCloseModal = () => {
    SetOpenModal(false);
  };

  return (
    <>
      <form className="container-form-booking">
        <FormControl>
          <InputsBar
            label="Fecha de Entrada"
            type="date"
            name="date"
            value={entryDate}
            onChange={(e) => setentryDate(e.target.value)}
            icon={<CalendarMonthIcon />}
          />
          <ValidationForm type="date" value={entryDate} />

          <InputsBar
            label="Fecha de Salida"
            type="date"
            name="date"
            value={departureDate}
            onChange={(e) => setdepartureDate(e.target.value)}
            icon={<CalendarMonthIcon />}
          />
          <ValidationForm type="date" value={departureDate} />

          <InputsBar
            label="Cantidad de Personas"
            type="number"
            name="number"
            value={amountPeople}
            onChange={(e) => setamountPeople(e.target.value)}
            icon={<PeopleIcon />}
            placeholder="Cantidad personas"
          />
          <ValidationForm type="number" value={amountPeople} />

          <FormControl variant="standard">
            <InputsBar
              label="Selecciona una opción"
              name="option"
              icon={<KeyboardArrowDownIcon onClick={handleClick} />}
              placeholder={typeService || "Selecciona una opción"}
              value={typeService}
              onChange={(e) => setTypeService(e.target.value)}
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className="container-menu-form"
            >
              <MenuItem onClick={() => handleMenuClick("Pasadia")}>
                Pasadia
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("Estadia")}>
                Estadia
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("Evento")}>
                Evento
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("Camping")}>
                Camping
              </MenuItem>
            </Menu>
          </FormControl>
          <div className=" container-button-booking">
            <Buttons text="Reservar" onClick={handleOpenModal} />

            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={() => setOpenSnackbar(false)}
            >
              <Alert severity="error" sx={{ width: "100%" }} variant="filled">
                Ingresar los campos correctamente
              </Alert>
            </Snackbar>

            <Modal open={openModal} onClose={handleCloseModal}>
              <div className="container-modal">
                <div className="container-title-modal">
                  <div>
                    <h3>Reserva Confirmada</h3>
                  </div>
                  <div className="container-icon-modal">
                    <FlotingButton
                      onClick={handleCloseModal}
                      icon={<CheckIcon />}
                      title="check"
                    />
                  </div>
                </div>

                <div className="container-info-modal">
                  <p>
                    <span>Fecha de Entrada : </span>
                    {entryDate}
                  </p>
                  <p>
                    <span>Fecha de Salida : </span>
                    {departureDate}
                  </p>
                  <p>
                    <span>Cantidad de Personas : </span>
                    {amountPeople}
                  </p>
                  <p>
                    <span>Tipo de Servicio : </span>
                    {typeService}
                  </p>
                </div>
                <div className="container-btn-modal">
                  <Buttons
                    text="Pagar"
                    href="https://api.whatsapp.com/send?phone=573124026944&text=Hola, Deseo realizar el pago de !"
                  />
                </div>
              </div>
            </Modal>
          </div>
        </FormControl>
      </form>
    </>
  );
};

export default FormBooking;
