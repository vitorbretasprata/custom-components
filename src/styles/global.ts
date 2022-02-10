import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-size: .8rem;
    }

    button, a, .transition {
        transition: all .3s ease-in;
    }
    
    .container {
        max-width: 123px;
        padding 1rem .6rem;
        width: 100%;
        margin: 0 auto;
    }

    * {
        box-sizing: border-box;
    }

    .p-absolute {
        position: absolute;
    }

    .d-flex {
        display: flex;
    }

    .d-centralize {
        justify-content: center;
        align-items: center;
    }

    .d-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;