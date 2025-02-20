import React, { useState, useEffect } from "react";
import * as Styled from "./Carousel.styled";
import {
  atomic,
  essays,
  laws,
  sapiens,
  canthurt,
  manssearch,
  words,
} from "../../../../assets/assets";
import BookList from "../book/BookList";
import Cube from "../cube/Cube";
import { useExtractColors } from "react-extract-colors";

function Carousel() {
  // const [bookImgs, setBookImgs] = useState([
  //   essays,
  //   laws,
  //   sapiens,
  //   canthurt,
  //   manssearch,
  //   words,
  // ]);
  const [bookImgs, setBookImgs] = useState([]);
  const inProgress = "inProgress";
  // const {dominantColor} = useExtractColors(atomic);
  // console.log('domin', dominantColor)\

  useEffect(() => {}, []);

  return (
    <Styled.CarouselRoot>
      <Styled.Slider>
        <p>In Progress</p>
        <Cube bgImg={atomic} inProgress={inProgress} />
        {bookImgs.map((item, i) => (
          <BookList item={item} key={i} index={i} quantity={bookImgs.length} />
        ))}
      </Styled.Slider>
    </Styled.CarouselRoot>
  );
}

export default Carousel;
