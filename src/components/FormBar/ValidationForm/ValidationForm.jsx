/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./ValidationForm.css"

const ValidationForm = ({ type, value }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    const validateInput = () => {
      if (type === "date") {
        const currentDate = new Date();
        const inputDate = new Date(value);
        if (inputDate < currentDate) {
          setError("La fecha no puede ser anterior a hoy.");
        } else {
          setError("");
        }
      } else if (type === "number" && isNaN(value)) {
        setError("Este campo debe ser un número.");
      } else if (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
        setError("Correo electrónico no válido.");
      } else {
        setError("");
      }
    };

    validateInput();
  }, [type, value]);

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
