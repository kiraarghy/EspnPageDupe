import React, { Component } from "react";
import styled from "styled-components";

import menuicon from "./menuicon.png";

const Wrapper = styled.div`
  font-family: "Open Sans";
  color: black;
  background-color: white;
  padding: 5px;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;

const HeaderLeft = styled.span`
  flex: 8;
  align-self: flex-start;
  margin: 5px;
`;

const MenuImage = styled.img`height: 15px;`;

const MenuButton = styled.button`
  flex: 1;
  align-self: flex-end;
  border: none;
  background: white;
  float: right;
  &:hover ${MenuImage} {
    background: black;
  }
`;

const HeaderWrapper = styled.header``;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <HeaderLeft>
            <span>Kara.</span>
          </HeaderLeft>
          <MenuButton>
            <MenuImage src={menuicon} />
          </MenuButton>
        </NavWrapper>
        <HeaderWrapper />
        <a href="https://icons8.com/icon/3096/Menu">Menu icon credits</a>
      </Wrapper>
    );
  }
}

export default App;
