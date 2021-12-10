import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --white: #f5f5f5;
        --vanilla: #F1EDE0;
        --black: #0C0D0D;
        --orange: #C85311;
        --gray: #666360;
        --green: #11995e;
        --roxo: #403caa;
        --gray-ligth: #8a8a8b;
        --ligth-black-blue: rgb(0, 126, 138);
        --black-ligth: #454a4d;
        --blue-react: #282c34;
    }

    body{
        background: var(---blue-react);
        color: var(---black);
    }

    body, input, button {
        font-family: "PT Serif", serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Roboto Mono", monospace;
        font-weight: 700;
        margin: 0px;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
