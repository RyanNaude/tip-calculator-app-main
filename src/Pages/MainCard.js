/** Advice Generator Page */
import React, { useEffect } from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

/** Import Custom Components */
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.mainCardBackGround.main,
    borderRadius: "20px",
    padding: "1rem",
    // [theme.breakpoints.down("md")]: {},
  },
}));

export default function MainCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {}, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      width={"65%"}
    >
      <Grid item container xs={12}>
        <Grid item xs={6}>
          <InputCard
            tipState={props.tipState}
            setTipState={props.setTipState}
          />
        </Grid>
        <Grid item xs={6}>
          <OutputCard
            tipState={props.tipState}
            setTipState={props.setTipState}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
