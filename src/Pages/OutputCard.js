/** Advice Generator Page */
import React from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/** Import Custom Components */
import TypogComp from "../Components/TypogComp";
import ButtonComp from "../Components/ButtonComp";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.outputCardBackGround.main,
    paddingTop: "2.5rem",
    paddingRight: "1rem",
    paddingLeft: "1.5rem",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {},
  },
}));

export default function OutputCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  function handleClick() {
    props.setTipState({
      bill: 0,
      numPeeps: 0,
      tipPerc: 0,
      totalTip: 0,
      totalBill: 0,
    });
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item container direction={"row"} className={classes.title} xs={12}>
        <Grid
          item
          container
          direction={"column"}
          xs={6}
          style={{ marginBottom: "2rem" }}
        >
          <Grid item>
            <TypogComp
              text={"Tip Amount"}
              colorFont={"#f4fafa"}
              fonts={matchesMD ? "14px" : "18px"}
            />
          </Grid>
          <Grid item>
            <TypogComp
              text={"/ person"}
              colorFont={"#7f9c9f"}
              fonts={matchesMD ? "10px" : "14px"}
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent={"flex-end"} xs={6}>
          <TypogComp
            text={
              props.tipState.totalTip === 0
                ? "$ 0.00"
                : "$" +
                  parseFloat(
                    props.tipState.totalTip / props.tipState.numPeeps
                  ).toFixed(2)
            }
            colorFont={"#26c0ab"}
            fonts={matchesMD ? "25px" : "30px"}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        className={classes.title}
        xs={12}
        style={{ marginBottom: matchesMD ? "2rem" : "7.6rem" }}
      >
        <Grid item container direction={"column"} xs={6}>
          <Grid item>
            <TypogComp
              text={"Total"}
              colorFont={"#f4fafa"}
              fonts={matchesMD ? "14px" : "18px"}
            />
          </Grid>
          <Grid item>
            <TypogComp
              text={"/ person"}
              colorFont={"#7f9c9f"}
              fonts={matchesMD ? "10px" : "14px"}
            />
          </Grid>
        </Grid>
        <Grid item container justifyContent={"flex-end"} xs={6}>
          <TypogComp
            text={
              props.tipState.totalBill === 0
                ? "$ 0.00"
                : "$" +
                  parseFloat(
                    props.tipState.totalBill / props.tipState.numPeeps
                  ).toFixed(2)
            }
            colorFont={"#26c0ab"}
            fonts={matchesMD ? "25px" : "30px"}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.title}
        xs={12}
        style={{ paddingBottom: "1rem" }}
      >
        <ButtonComp
          butName={"RESET"}
          butWidth={"100%"}
          handleChange={handleClick}
        />
      </Grid>
    </Grid>
  );
}
