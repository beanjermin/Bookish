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
      <Section3 className="section"><div>Section 3</div></Section3>
    </div>
  );
}

export default App;
