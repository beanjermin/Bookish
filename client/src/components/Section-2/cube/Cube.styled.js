import styled from "styled-components";

export const CubeRoot = styled.div`
  height: 150px;
  width: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: ${({$inProgress}) => $inProgress ? 'rotateX(0)' : 'rotateX(8deg)'};

  .inProgress {
    transform: rotateX(0);
  }

  .side {
    position: absolute;
  }

  .top {
    height: 95px;
    width: 20px;
    background-color: lightyellow;
    transform: translateX(38px) translateY(-45px) rotateY(-90deg) rotateX(90deg);
  }

  .front {
    height: 150px;
    width: 100px;
    background-image: ${({ $bgImg }) => ($bgImg ? `url(${$bgImg})` : "")};
    background-position: center;
    background-size: 100% 100%;
    transform: translateZ(10px);
  }

  .back {
    height: 150px;
    width: 100px;
    transform: translateZ(-10px);
  }

  .left {
    height: 150px;
    width: 20px;
    transform: translateX(-10px) translateZ(0) rotateY(90deg) perspective(1px);
    >p {
        color: white;
        transform: rotateZ(90deg) rotateY(190deg);
        -webkit-font-smoothing: subpixel-antialiased;
        width: 100%;
        position: relative;
        top: 50%;
        font-size: small;
        zoom: 90%;
    }
  }

  .right {
    height: 145px;
    width: 20px;
    background-color: beige;
    transform: translateX(85px) translateY(3px) rotateY(90deg);
  }
`;
