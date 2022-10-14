import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { defaulTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
