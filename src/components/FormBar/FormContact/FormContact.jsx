/* eslint-disable no-const-assign */
import { useState, useRef } from "react";
import {
  Alert,
  FormControl,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import InputsBar from "../../InputsBar/InputsBar";
import Buttons from "../../Buttons/Buttons";

import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MessageIcon from "@mui/icons-material/Message";
import DescriptionIcon from "@mui/icons-material/Description";

import "./FormContact.css";
import ValidationForm from "../ValidationForm/ValidationForm";

const FormContact = () => {
  // Control de estado para los input
  const textareaInputRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [affair, setAffair] = useState("");
  const [message, setMessage] = useState("");
  // Control de estado para abrir los Snackbar
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [isSnackbarOpenError, setSnackbarOpenError] = useState(false);
  // Funcion para darle focus al input texarea
  const handleInputFocus = () => {
    textareaInputRef.current.focus();
  };
  // Enviar la informacion ingresada en el input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      cel !== "" &&
      affair !== "" &&
      message !== ""
    ) {
      setSnackbarOpen(true);
      setName("");
      setEmail("");
      setCel("");
      setAffair("");
      setMessage("");
    } else {
      setSnackbarOpenError(true);
    }
  };
  // Funcion para abrir el Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setSnackbarOpenError(false);
  };
  // Funcion para limpiar los input
  const handleClear = () => {
    setName("");
    setEmail("");
    setCel("");
    setAffair("");
    setMessage("");
  };

  return (
    <>
      <form className="container-form-contact">
        <div>
          <FormControl>
            <InputsBar
              label="Nombre"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<PersonIcon />}
              placeholder="Nombre Apellido"
            />
            <ValidationForm type="text" value={name} />

            <InputsBar
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<MailOutlineIcon />}
              placeholder="ejemplo@dominio.com"
            />
            <ValidationForm type="email" value={email} />

            <InputsBar
              label="Celular"
              type="tel"
              value={cel}
              onChange={(e) => setCel(e.target.value)}
              icon={<PhoneAndroidIcon />}
              placeholder="+XX-XXXXXXXXXX"
            />
            <ValidationForm type="tel" value={cel} />

            <InputsBar
              label="Asunto"
              type="text"
              value={affair}
              onChange={(e) => setAffair(e.target.value)}
              icon={<MessageIcon />}
              placeholder="Asunto mensaje"
            />
            <ValidationForm type="text" value={affair} />
          </FormControl>
        </div>

        <div className="container-textarea">
          <FormControl>
            <InputAdornment
              position="start"
              className="container-icon-form-contact"
            >
              <IconButton
                color="success"
                className="btn-icon-form"
                onFocus={handleInputFocus}
              >
                <span>
                  <DescriptionIcon />
                </span>
              </IconButton>
            </InputAdornment>

            <TextField
              id="outlined-multiline-static"
              inputRef={textareaInputRef}
              label="Mensaje"
              focused
              required
              color="success"
              multiline
              rows={9}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                style: {
                  color: "#FF5D02",
                  fontWeight: 300,
                },
              }}
            />
          </FormControl>
        </div>
      </form>

      <div className="container-button-form-contact">
        <Buttons text="Enviar" onClick={handleSubmit} />
        <Buttons text="Limpiar" onClick={handleClear} />

        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
        >
          <Alert severity="success" variant="filled">
            ! OK Información enviada !
          </Alert>
        </Snackbar>

        <Snackbar
          open={isSnackbarOpenError}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
        >
          <Alert severity="error" variant="filled">
            ! Ingresar todos los campos correctamente !
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default FormContact;
