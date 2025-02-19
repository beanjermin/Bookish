import styled from "styled-components";

export const CarouselRoot = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

export const Slider = styled.div`
  @keyframes autoRun {
    from {
      transform: perspective(1000px) rotateX(-8deg) rotateY(0deg);
    }
    to {
      transform: perspective(1000px) rotateX(-8deg) rotateY(360deg);
    }
  }

  position: absolute;
  width: 100px;
  height: 150px;
  top: 10%;
  left: calc(50% - 100px);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: autoRun 20s linear infinite;
  /* rotateY(0deg) rotateX(-8deg); */
  z-index: 10;
`;


