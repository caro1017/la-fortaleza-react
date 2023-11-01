/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import "./InputsBar.css";

const InputsBar = ({
  label,
  type,
  value,
  icon,
  onChange,
  placeholder,
  onClick,
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  error,
  helperText,
}) => {
  const inputRef = useRef(null);
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
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            "& > :not(style)": {
              width: "100%",
              "& input": {
                color: inputColor,
                opacity: 0.5,
                fontWeight: 400,
              },
            },
          }}
        >
          <TextField
            label={label}
            variant="standard"
            type={type}
            value={value}
            onChange={onChange}
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
            focused
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={onClick}
                    color="success"
                    onFocus={handleInputFocus}
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
          />
        </Box>
      </div>
    </>
  );
};

export default InputsBar;
