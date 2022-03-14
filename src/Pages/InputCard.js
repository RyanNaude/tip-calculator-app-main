/** Advice Generator Page */
import React, { useState } from "react";

/** Import Material UI Components */
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

/** Import Custom Components */
import TypogComp from "../Components/TypogComp";
import TextFieldComp from "../Components/TextFieldComp";
import ButtonComp from "../Components/ButtonComp";

/** Material UI Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.mainCardBackGround.main,
    paddingTop: "1.5rem",
    paddingLeft: "1rem",
    paddingRight: "1.5rem",
    borderRadius: "20px",
    marginBottom: "2rem",
  },
}));

export default function InputCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  // console.log(props);

  function handleChange(event) {
    switch (event.target.name) {
      case "numPeeps":
        if (props.tipState.bill !== 0 && props.tipState.tipPerc) {
          props.setCheckField(!props.checkField);
          var tpp = props.tipState.bill * (props.tipState.tipPerc / 100);
          var totBill = parseInt(props.tipState.bill) + tpp;
          props.setTipState({
            ...props.tipState,
            [event.target.name]: parseInt(event.target.value),
            totalTip: tpp,
            totalBill: totBill,
          });
        }
        break;

      default:
        props.setTipState({
          ...props.tipState,
          [event.target.name]: parseInt(event.target.value),
        });
        props.setCheckField(!props.checkField);
        break;
    }
  }

  function handleClick(event) {
    props.setTipState({
      ...props.tipState,
      tipPerc: parseInt(event.target.value),
    });
    props.setCheckField(!props.checkField);
  }

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12}>
        <TypogComp text={"Bill"} colorFont={"#7f9c9f"} />
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "1.5rem" }}>
        <TextFieldComp
          textName={"bill"}
          handleChange={handleChange}
          value={props.tipState.bill}
        />
      </Grid>
      <Grid item xs={12}>
        <TypogComp text={"Select Tip %"} colorFont={"#7f9c9f"} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: "1.5rem" }}>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={matchesMD ? 6 : 4}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <ButtonComp
            butName={"5%"}
            butStyle={"root"}
            butWidth={"90%"}
            handleChange={handleClick}
            butValue={5}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={matchesMD ? 6 : 4}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <ButtonComp
            butName={"10%"}
            butStyle={"root"}
            butWidth={"90%"}
            handleChange={handleClick}
            butValue={10}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={matchesMD ? 6 : 4}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <ButtonComp
            butName={"15%"}
            butStyle={"root"}
            butWidth={"90%"}
            handleChange={handleClick}
            butValue={15}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={matchesMD ? 6 : 4}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <ButtonComp
            butName={"25%"}
            butStyle={"root"}
            butWidth={"90%"}
            handleChange={handleClick}
            butValue={25}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={matchesMD ? 6 : 4}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <ButtonComp
            butName={"50%"}
            butStyle={"root"}
            butWidth={"90%"}
            handleChange={handleClick}
            butValue={50}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={matchesMD ? 6 : 4}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <TextFieldComp
            textName={"tipPerc"}
            handleChange={handleChange}
            placeHolder={"Custom"}
            value={props.tipState.tipPerc}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TypogComp text={"Number of People"} colorFont={"#7f9c9f"} />
      </Grid>
      <Grid item xs={12}>
        <TextFieldComp
          textName={"numPeeps"}
          handleChange={handleChange}
          value={props.tipState.numPeeps}
        />
      </Grid>
    </Grid>
  );
}
