import React from "react";

/** Import MUI components */
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InputAdornment from "@mui/material/InputAdornment";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    // padding: "0.5rem",
    // border: "0"
  },
}));

export default function TextFieldComp(props) {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-basic"
      label=""
      variant="outlined"
      value={String(props.value)}
      style={{
        width: "100%",
        backgroundColor: "#f4fafa",
      }}
      onChange={props.handleChange}
      name={props.textName}
      inputProps={{
        className: classes.input,
        min: 0,
        style: { textAlign: "right" },
        fontFamily: "Space Mono",
      }}
      placeholder={props.placeHolder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {props.textName === "bill" ? (
              <AttachMoneyIcon />
            ) : props.textName === "numPeeps" ? (
              <PersonIcon />
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  );
}
