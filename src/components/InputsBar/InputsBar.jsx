/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import "./InputsBar.css";

const InputsBar = ({
  label,
  type,
  icon,
  placeholder,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  error,
  helperText,
  name,
  value,
  onChange,
}) => {
  const inputRef = useRef();
  const [inputColor, setInputColor] = useState("#057F2A");

  const handleInputFocus = () => {
    inputRef.current.focus();
    setInputColor("#FF5D02");
  };

  const handleInputBlur = () => {
    setInputColor("#057F2A");
  };

  return (
    <>
      <div className="container-input">
        <Box
          component="div"
          sx={{
            "& > :not(style)": {
              width: "100%",
              "& input": {
                color: inputColor,
                fontWeight: 400,
              },
            },
          }}
        >
          <TextField
            name={name}
            label={label}
            value={value}
            variant="standard"
            type={type}
            InputLabelProps={{
              style: {
                letterSpacing: "1px",
                fontWeight: 400,
                fontFamily: "'Poppins', sans-serif",
              },
              shrink: true,
            }}
            color="success"
            className="styled-textfield"
            placeholder={placeholder}
            required
            focused
            InputProps={{
              style: {
                color: "#FF5D02",
                fontWeight: 300,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    color="success"
                    onClick={handleInputFocus}
                    onBlur={handleInputBlur}
                    className="btn-icon-form"
                    aria-controls={ariaControls}
                    aria-expanded={ariaExpanded}
                    aria-haspopup={ariaHaspopup}
                  >
                    <span>{icon}</span>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            inputRef={inputRef}
            error={error}
            helperText={error ? helperText : ""}
            onChange={onChange}
          />
        </Box>
      </div>
    </>
  );
};

export default InputsBar;
