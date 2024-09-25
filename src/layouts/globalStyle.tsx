import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%; 
    }

    body {
        margin: 0;
        font-family: var(--font-family, Arial, sans-serif);
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit; 
        font-weight: bold;
    }

    ul, ol {
        list-style: none; 
    }

    img {
        max-width: 100%;
        height: auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input {
        font-family: inherit;
        font-size: inherit;
    }

    fieldset {
        border: none;
    }
`;
