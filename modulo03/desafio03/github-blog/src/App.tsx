/* eslint-disable prettier/prettier */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ProfileProvider } from './context/ProfileContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProfileProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ProfileProvider>
    </ThemeProvider>
  )
}
