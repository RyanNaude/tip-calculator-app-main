/** Advice Generator Page */
import React, { useEffect, useState } from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

/** Import Custom Components */
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.mainCardBackGround.main,
    borderRadius: "20px",
    padding: "1rem",
  },
}));

export default function MainCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {}, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      width={matchesMD ? "375px" : "1440px"}
    >
      <Grid item container xs={12} direction={matchesMD ? "column" : "row"}>
        <Grid item xs={6}>
          <InputCard
            tipState={props.tipState}
            setTipState={props.setTipState}
            checkField={props.checkField}
            setCheckField={props.setCheckField}
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
