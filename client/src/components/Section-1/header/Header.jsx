import React from "react";
import * as Styled from "./Header.styled";

function Header() {
  return (
    <Styled.HeaderRoot>
        <Styled.TitleWrapper>
            <Styled.Title>bookish.</Styled.Title>
            <Styled.SubTitle>booklist</Styled.SubTitle>
        </Styled.TitleWrapper>
    </Styled.HeaderRoot>
  );
}

export default Header;
