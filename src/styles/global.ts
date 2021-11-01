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

    * {
        box-sizing: border-box;
    }
`;