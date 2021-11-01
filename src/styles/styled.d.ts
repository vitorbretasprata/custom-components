import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title : string;

        colors: {
            primary: string,
            primaryDarker: string,
            primaryLighter: string,

            text: string
        }
    }
}