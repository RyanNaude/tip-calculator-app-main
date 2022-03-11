import React from "react";

/** Import MUI components */
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.buttonBackground.main,
    fontFamily: "Space Mono",
    "&:hover": {
      backgroundColor: theme.palette.buttonHoverBackground.main,
      color: theme.palette.buttonBackground.main,
    },
    [theme.breakpoints.down("md")]: {},
  },
  submitRoot: {
    backgroundColor: theme.palette.buttonHoverBackground.main,
    color: theme.palette.buttonBackground.main,
    fontFamily: "Space Mono",
    "&:hover": {
      backgroundColor: theme.palette.buttonBackground.main,
      color: theme.palette.buttonHoverBackground.main,
    },
    [theme.breakpoints.down("md")]: {},
  },
}));

export default function ButtonComp(props) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={props.butStyle === "root" ? classes.root : classes.submitRoot}
      style={{ width: props.butWidth }}
      name={props.butName}
      onClick={props.handleChange}
      value={props.butValue}
    >
      {props.butName}
    </Button>
  );
}
