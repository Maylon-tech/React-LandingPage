import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --color-1: #f2f6ff;
        --color-2: #fafaff;
        --color-3: #222;
        --color-primary: #c0e550;
        --color-primary-dark: 005aff;
        --color-white: #fff;
    }



    body {
        background-color: lightgray;
        color: var(--color-white);
        font-size: 1.2rem;
        height: 100vh;
    }

`

export default GlobalStyles