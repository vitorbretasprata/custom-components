import styled from "styled-components";

export const SliderContainer = styled.div`
    border: 1px solid red;
    position: relative;
    width: 100%; 
    
    & .wrapper {
        margin: auto;
        width: 100%;
    }

    & .slides-container {
        margin: 0;
        padding: 0;
        flex-shrink: 0;
        position: relative;
        list-style: none;
        width: 100%;
        justify-content: flex-start;
    }

    & .arrows {
        width: 100%;
        height: 100%;
    }

    & .arrows button {
        border: none;
        background: none;
        font-size: 1.2rem;
        padding: 0 .5rem;
        height: 100%;
        z-index: 2;
    }

    & .slide {
        min-width: 100%;
        margin: 0;
        min-height: 300px;
        position: relative;
        text-align: center;
        align-items: center;
        justify-content: center;
        border: 1px solid blue;
    }

    & .arrows button:hover {
        background-color: rgba(212, 212, 212 .5);    
        font-size: 1.4rem;   
    }

    
`;