import { createTheme } from "@mui/material/styles";

const strCyan = "#26c0ab";

const vdarkCyan = "#00494d";
const darkGreyCyan = "#5e7a7d";
const grayCyan = "#7f9c9f";
const lightGreyCyan = "#c5e4e7";
const vLightGreyCyan = "#f4fafa";
const white = "#fff";

export default createTheme({
  palette: {
    primary: {
      main: vdarkCyan,
    },
    secondary: {
      main: vdarkCyan,
    },
    tertiary: {
      main: vdarkCyan,
    },
    backGround: {
      main: lightGreyCyan,
    },
    mainCardBackGround: {
      main: white,
    },
    outputCardBackGround: {
      main: vdarkCyan,
    },
    buttonBackground: {
      main: vdarkCyan,
    },
    buttonHoverBackground: {
      main: strCyan,
    },
    vLightGreyCyan: {
        main: vLightGreyCyan,
    }
  },
  typography: {
    adviceHeader: {
      fontFamily: "Space Mono",
    },
    tipBody: {
      fontFamily: "Space Mono",
    },
  },
  body: {
    margin: 0,
  },
});
