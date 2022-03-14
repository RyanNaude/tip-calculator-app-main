/** Main App Page */
import React, { useState, useEffect } from "react";

/** Import MUI 5 Theme */
import { ThemeProvider } from "@mui/styles";
import theme from "../Assets/Theme/theme";

/** Import MUI 5 components */
import { Grid } from "@mui/material";

/** Import Custom Layout */
import Header from "../Layout/Header/index";
import Main from "../Layout/Main/index";
import Footer from "../Layout/Footer/index";

function App() {
  const [tipState, setTipState] = useState({
    bill: "",
    numPeeps: "",
    tipPerc: "",
    totalTip: "",
    totalBill: "",
  });

  const [checkField, setCheckField] = useState(false);

  useEffect(() => {
    Object.keys(tipState).map((data) => {
      if (tipState[data] === "") {
      }
    });
  }, [checkField]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid>
          <Header />
        </Grid>
        <Grid>
          <Main
            tipState={tipState}
            setTipState={setTipState}
            checkField={checkField}
            setCheckField={setCheckField}
          />
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
