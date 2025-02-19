import styled from "styled-components";

export const HeaderRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  `;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: .75;
`;

export const Title = styled.h1`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 2.5rem;
  /* font-size: calc(2vw + 2vh + 1vmin) */
`;

export const SubTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Quicksand";
  letter-spacing: 4px;
`;
