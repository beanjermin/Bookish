import React from "react";
import * as Styled from "./BookList.styled";
import Cube from "../cube/Cube";

function BookList({ item, index, quantity }) {
  console.log("item", item);
  console.log("key", index);
  return (
    <Styled.BookList $index={index} $quantity={quantity}>
      <Cube bgImg={item} />
    </Styled.BookList>
  );
}

export default BookList;
