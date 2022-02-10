import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { AppContext, Context } from "src/context/context";
import { GlobalStyles } from "src/styles/global";

function MyApp({ Component, pageProps }) {

  const jesus = useContext(AppContext);

  return (
    <Context>
      <ThemeProvider theme={jesus.theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Context>
  );
}

export default MyApp
