import React, { useState, useRef, useEffect } from "react";
import * as Styled from "./Cube.styled";
import ColorThief from "colorthief";
import { useExtractColors } from "react-extract-colors";

function Cube({ bgImg, inProgress }) {
//   const [dominantColor, setDominantColor] = useState("lightyellow");
//   const [palette1, setPalette1] = useState([]);

//   useEffect(() => {
//     if (bgImg) {
//       const img = new Image();
//       img.crossOrigin = "anonymous";
//       img.src = bgImg;

//       img.onload = () => {
//         const colorThief = new ColorThief();
//         const color = colorThief.getColor(img, 10);
//         const palette = colorThief.getPalette(img);
//         console.log("colors", color);
//         console.log("palette", palette);
//         setDominantColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
//         setPalette1(`rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`)
//       };
//     }
//   }, [bgImg]);
    const {dominantColor} = useExtractColors(bgImg);
  console.log('domin', dominantColor)

  return (
    <Styled.CubeRoot $bgImg={bgImg} $inProgress={inProgress}>
      <div className="top side"></div>
      <div className="front side"></div>
      <div
        className="back side"
        style={{ backgroundColor: dominantColor }}
      ></div>
      <div
        className="left side"
        style={{ backgroundColor: dominantColor }}
      >
        <p>Title</p>
      </div>
      <div className="right side"></div>
    </Styled.CubeRoot>
  );
}

export default Cube;
