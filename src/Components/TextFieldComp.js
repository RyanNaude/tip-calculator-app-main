import React from "react";

/** Import MUI components */
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    padding: "0.5rem",
    border: "0"
  },
}));

export default function TextFieldComp(props) {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-basic"
      label=""
      variant="outlined"
      style={{ width: "100%", backgroundColor: "#f4fafa" }}
      onChange={props.handleChange}
      name={props.textName}
      inputProps={{ className: classes.input }}
    />
  );
}
