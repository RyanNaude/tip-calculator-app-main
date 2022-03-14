import React from "react";

/** Import MUI components */
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InputAdornment from "@mui/material/InputAdornment";
import { fontSize } from "@mui/system";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    color: "#00494d",
    fontSize: "20px",
    fontFamily: "Space Mono",
    height: "1rem",
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
        marginLeft: "0.7rem",
        marginRight: "0.7rem",
      }}
      onChange={props.handleChange}
      name={props.textName}
      inputProps={{
        className: classes.input,
        min: 0,
        style: { textAlign: "right" },
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
