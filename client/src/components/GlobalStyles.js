import styled, { createGlobalStyle } from "styled-components";
import { bgImg } from "../../assets/assets";

export const GlobalStyles = createGlobalStyle`
    html, body, main, .root, .App {
        height: 100%;
    }

    body {
        background-image: URL(${bgImg});
        font-family: 'Libre Baskerville', 'League Spartan', sans-serif;
    }

    .section {
        padding: 1rem;
        box-sizing: border-box;
    }
`;

export const Section1 = styled.div`
    height: 8%;
    border: 1px solid red;
`;

export const Section2 = styled.div`
    height: 50%;
    border: 1px solid blue;
`;

export const Section3 = styled.div`
    height: 42%;
    border: 1px solid yellow
`;


