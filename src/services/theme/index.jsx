import { extendTheme } from "@chakra-ui/react";
import "@fontsource/manrope" ;

const theme = extendTheme({
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
    mono: `'Manrope', sans-serif`,
  },
  colors: {
    black: "#1B1B1B",
    main: {
      primary: "#6257E2",
      surface: "#D5D1FF",
    },
  },
  styles: {
    global: {
      "*": {
        color: "#1B1B1B",
      },
    },
  },
});

export default theme;
