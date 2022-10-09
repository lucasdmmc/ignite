import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, a {
    list-style: none;
    text-decoration: none;
  }

  :focus {
    outline: 0;
  }

  :root { 
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: ${props => props.theme['background']};
  }
`