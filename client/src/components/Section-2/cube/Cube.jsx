import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./Cube.styled";
import { useExtractColors } from "react-extract-colors";

function Cube({ bgImg, inProgress }) {
  const { dominantColor, colors } = useExtractColors(bgImg);

  return (
    <Styled.CubeRoot $bgImg={bgImg} $inProgress={inProgress}>
      <div className="top side"></div>
      <div className="front side"></div>
      <div
        className="back side"
        style={{ backgroundColor: dominantColor }}
      ></div>
      <div className="left side" style={{ backgroundColor: colors[1] }}>
        <p>Title</p>
      </div>
      <div className="right side"></div>
    </Styled.CubeRoot>
  );
}

export default Cube;
