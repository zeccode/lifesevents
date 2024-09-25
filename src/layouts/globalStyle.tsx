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
        font-size: 16px;
    }

    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.colors.peach};
        line-height: 1.6; 
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit; 
        font-weight: bold;
        color: ${({ theme }) => theme.colors.black};
    }

    p {
        margin: 0 0 1em; 
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: ${({ theme }) => theme.fontSize.medium}; 
    }

    ul, ol {
        list-style: none; 
        padding-left: 0; 
    }

    img {
        max-width: 100%; 
        height: auto; 
    }

    a {
        text-decoration: none; 
        color: ${({ theme }) => theme.colors.primary}; 
    }

    button, input {
        font-family: inherit; 
        font-size: inherit; 
    }

    fieldset {
        border: none; 
    }
    /* Estilos de Aviso, Alerta, Sucesso e Informativo */
    .alert {
        background-color: ${({ theme }) => theme.status.error};
        color: white;
        padding: 1em;
        border-radius: 4px;
    }

    .success {
        background-color: ${({ theme }) => theme.colors.success};
        color: white;
        padding: 1em;
        border-radius: 4px;
    }

    .warning {
        background-color: ${({ theme }) => theme.status.warning};
        color: black;
        padding: 1em;
        border-radius: 4px;
    }

    .info {
        background-color: ${({ theme }) => theme.status.info};
        color: white;
        padding: 1em;
        border-radius: 4px;
    }
`;
