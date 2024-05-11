import { createTheme } from "@mui/material/styles";

const colorOne = "##FFFFFF";
const colorTwo = "#0da8b1";
const colorThree = "#fc4c3d";
// eslint-disable-next-line react-refresh/only-export-components
export default createTheme({
  palette: {
    common: {
      white: `${colorOne}`,
      blue: `${colorTwo}`,
      orange: `${colorThree}`,
    },
    primary: {
      main: `${colorTwo}`,
    },
    secondary: {
      main: `${colorThree}`,
    },
    info: {
      main: `${colorOne}`,
    },
  },
});
