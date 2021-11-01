import '../styles/globals.css'
import { ThemeProvider } from "styled-components";

import { useContext } from "react";

import { AppContext, Context } from "src/context/context";

function MyApp({ Component, pageProps }) {

  const jesus = useContext(AppContext);

  return (
    <Context>
      <ThemeProvider theme={jesus.theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Context>
  );
}

export default MyApp
