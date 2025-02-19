import React from "react";
import Header from "./Section-1/header/Header.jsx";
import Carousel from "./Section-2/carousel/Carousel.jsx";
import { GlobalStyles, Section1, Section2, Section3 } from "./GlobalStyles.js";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Section1 className="section">
        <Header />
      </Section1>
      <Section2 className="section">
        <Carousel />
      </Section2>
      <Section3 className="section">Section 3</Section3>
    </div>
  );
}

export default App;

/*
<div className="banner">
        <p className="title">Bookish</p>
        <div className="slider" style={{ quantity: "10" }}>
          <div className="cube" style={{ transform: "rotateX(0)" }}>
            <div>In Progress</div>
            <div
              className="front side"
              style={{
                backgroundImage: `url(${words})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
              }}
            ></div>
            <div className="back side"></div>
            <div className="left side"></div>
            <div className="right side"></div>
            <div className="top side"></div>
          </div>

          <div
            className="item"
            style={{
              transform: "rotateY(0deg) translateZ(550px)",
              // transform: "translateZ(550px)",
            }}
          >
            <div className="cube">
              <div
                className="front side"
                style={{
                  backgroundImage: `url(${atomic})`,
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                }}
              ></div>
              <div className="back side"></div>
              <div className="left side"></div>
              <div className="right side"></div>
              <div className="top side"></div>
            </div>
          </div>
          <div
            className="item"
            style={{
              transform: "rotateY(60deg) translateZ(550px)",
              // transform: "translateZ(550px)",
            }}
          >
            <img src={essays} alt="" />
          </div>
          <div
            className="item"
            style={{
              transform: "rotateY(120deg) translateZ(550px)",
              // transform: "translateZ(550px)",
            }}
          >
            <img src={laws} alt="" />
          </div>
          <div
            className="item"
            style={{
              transform: "rotateY(180deg) translateZ(550px)",
              // transform: "translateZ(550px)",
            }}
          >
            <img src={canthurt} alt="" />
          </div>
          <div
            className="item"
            style={{
              transform: "rotateY(240deg) translateZ(550px)",
              // transform: "translateZ(550px)",
            }}
          >
            <img src={manssearch} alt="" />
          </div>
          <div
            className="item"
            style={{
              transform: "rotateY(300deg) translateZ(550px)",
              // transform: "translateZ(550px)",
            }}
          >
            <img src={sapiens} alt="" />
          </div>
        </div>
      </div>
      <div className="here">
        <p>asdjfasdf</p>
      </div>
*/
