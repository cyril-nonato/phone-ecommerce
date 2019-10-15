import { createGlobalStyle } from 'styled-components'

// 1rem = 10px;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    &:visited,
    &:link {
      text-decoration: none;
      color: black;
    }
  }

  html {
      font-size: 62.5%;
    }

  body {
    font-size: inherit;
    margin: 1rem 1.5rem;
  }

  @media only screen and (min-width: 700px) {

    html {
      font-size: 65%;
    }

    body {
      font-size: inherit;
      margin: 1rem 3rem;
    }
  }

  @media only screen and (min-width: 900px) { 

    html {
      font-size: 70%;
    }

    body {
      font-size: inherit;
      margin: 2rem 5rem;
    }
  }

  @media only screen and (min-width: 1800px) {
    html {
      font-size: 85%;
    }

    body {
      font-size: inherit;
      margin: 3rem 8rem;
    }
  }

`