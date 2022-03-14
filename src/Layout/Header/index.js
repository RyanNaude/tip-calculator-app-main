/** Main Body */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Import Custom Components */
import TypogComp from "../../Components/TypogComp";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backGround.main,
    paddingTop: "5rem",
    paddingBottom: "2rem",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <TypogComp
        text={"SPLI"}
        colorFont={"#5e7a7d"}
        letSpace={"8px"}
        fonts={matchesMD ? "20px" : "30px"}
      />
      <TypogComp
        text={"TTER"}
        colorFont={"#5e7a7d"}
        letSpace={"8px"}
        fonts={matchesMD ? "20px" : "30px"}
      />
    </Grid>
  );
}
