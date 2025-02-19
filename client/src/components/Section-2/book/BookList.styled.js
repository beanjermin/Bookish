import styled from "styled-components";

export const BookList = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  height: 150px;
  width: 100px;
  transform-style: preserve-3d;
  transform: ${({ $index, $quantity }) => {
      if ($index && $quantity) {
        const calcDeg = ($index + 1 - 1) * (360 / $quantity);
        return `rotateY(${calcDeg}deg)`;
      }
    }}
    rotateX(3deg) translateZ(550px);
  /* border: 1px solid yellow; */
`;
