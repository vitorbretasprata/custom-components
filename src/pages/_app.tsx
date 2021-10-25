import '../styles/globals.css'
import { ThemeProvider } from "styled-components";

import theme from "src/components/shared/theme";

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
