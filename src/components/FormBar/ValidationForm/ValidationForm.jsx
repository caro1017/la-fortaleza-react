/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./ValidationForm.css";

const ValidationForm = ({ type, value }) => {
  const [error, setError] = useState("");

  const currentDate = new Date();
  const inputDate = new Date(value);

  useEffect(() => {
    const validateInput = () => {
      if (value) {
        switch (type) {
          case "date":
            if (inputDate <= currentDate) {
              setError("La fecha no puede ser anterior a hoy.");
            } else {
              setError("");
            }
            break;

          case "number":
            if (isNaN(value)) {
              setError("Este campo debe ser un número.");
            } else if (parseFloat(value) > 10) {
              setError("Este campo debe ser un número menor o igual a 10.");
            } else {
              setError("");
            }
            break;

          case "tel":
            if (!/^\+\d{2}-\d{10}$/.test(value)) {
              setError("Numero de celular no valido");
            } else {
              setError("");
            }
            break;

          case "email":
            if (!/^\S+@\S+\.\S+$/.test(value)) {
              setError("Correo electrónico no válido.");
            } else {
              setError("");
            }
            break;

          case "text":
            if (!/^[a-zA-Z\s]+$/.test(value)) {
              setError("Solo se puede ingresar letras.");
            } else {
              setError("");
            }
            break;

          default:
            setError("");
            break;
        }
      } else {
        // If the value is empty, clear any existing error message
        setError("");
      }
    };

    validateInput();
  }, [type, value, currentDate, error]);

  return (
    <div>
      {error && (
        <div className="container-error-validate">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ValidationForm;
