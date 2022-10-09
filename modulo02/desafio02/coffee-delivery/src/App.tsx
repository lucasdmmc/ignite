import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/themes/defaults"
import  { ThemeProvider }  from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}> 
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
