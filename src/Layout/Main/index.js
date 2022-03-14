/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Import Custome Components */
import MainCard from "../../Pages/MainCard";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backGround.main,
    width: "100%",
    paddingBottom: "10rem",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        container
        className={classes.root}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item container xs={12} justifyContent={"center"}>
          <MainCard tipState={props.tipState} setTipState={props.setTipState} />
        </Grid>
      </Grid>
    </Grid>
  );
}
