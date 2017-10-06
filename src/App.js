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
  width: 100%;
  flex-direction: row;

  position: fixed;
  justify-content: flex-end;
`;

const HeaderLeft = styled.span`
  align-self: flex-start;
  margin: 5px;
  font-weight: bold;
`;

const MenuImage = styled.img`height: 15px;`;

const MenuButton = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0);
  float: right;
  margin: 5px;
  &:hover ${MenuImage} {
    background: black;
  }
`;

const HeaderWrapper = styled.header`display: flex;`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <MenuButton>
            <MenuImage src={menuicon} />
          </MenuButton>
        </NavWrapper>
        <HeaderWrapper>
          <HeaderLeft>
            <span>Kara.</span>
          </HeaderLeft>
        </HeaderWrapper>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg"
          width="100%"
          alt="CN Tower wikimedia"
        />
      </Wrapper>
    );
  }
}

export default App;
