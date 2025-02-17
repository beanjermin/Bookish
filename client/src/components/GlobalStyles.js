import styled, { createGlobalStyle } from "styled-components";
import { bgImg } from "../../assets/assets";

export const GlobalStyles = createGlobalStyle`
    body {
        background-image: URL(${bgImg});
    }
`;

export const Section1 = styled.div``;
