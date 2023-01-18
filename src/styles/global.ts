import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0 !important;
    font-family: 'Roboto', sans-serif;
  }

  body {
    max-width: 1280px;
    margin: 0 auto;
  }
`

// cor1: #373740 grey dark
// cor2: #2F3A59 blue secondary
// cor3: #738CBF blue main
// cor4: #8593A6 grey 
// cor5: #0D0D0D black