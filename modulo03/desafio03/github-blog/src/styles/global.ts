import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: none;
  }

  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
  }

`
