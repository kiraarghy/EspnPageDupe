import React, { Component } from "react";
import styled from "styled-components";

import menuicon from "./menuicon.png";

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  color: black;
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
  margin: 10px;
  font-weight: bold;
`;

const MenuImage = styled.img`height: 15px;`;

const MenuButton = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0);
  float: right;
  margin: 10px 30px 10px 0px;
  &:hover ${MenuImage} {
    background: black;
  }
`;

const TopLeftHeaderWrapper = styled.header`display: flex;`;

const SecondHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  height: 10%;
  background: white;
  margin: 80px 10px 60px 10px;
`;

const HeaderBold = styled.header`
  flex: 2;
  font-weight: bold;
  font-size: 2em;
`;

const SubHeader = styled.header`
  flex: 1;
  color: rgb(218, 218, 218);
  font-size: 2em;
`;

const ParallaxImg = styled.div`
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg");
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Article1Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin: 80px 10px 60px 10px;
  justify-content: space-between;
`;

const Article1Left = styled.section`
  flex: 1;
  margin: 10px;
`;

const HeaderBold1 = styled.header`
  font-weight: bold;
  font-size: 1.5em;
`;

const SubHeader1 = styled.header`
  color: rgb(218, 218, 218);
  font-size: 1.5em;
`;

const Article1Right = styled.section`
  flex: 1;
  margin: 0px 10px 0px 10px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <MenuButton>
            <MenuImage src={menuicon} />
          </MenuButton>
        </NavWrapper>
        <TopLeftHeaderWrapper>
          <HeaderLeft>
            <span>Kara.</span>
          </HeaderLeft>
        </TopLeftHeaderWrapper>
        <SecondHeaderWrapper>
          <HeaderBold>Lorem Ipsum Dolor</HeaderBold>
          <SubHeader>Sed do eiusmod tempor</SubHeader>
        </SecondHeaderWrapper>
        <ParallaxImg />
        <Article1Wrapper>
          <Article1Left>
            <HeaderBold1>Incididunt ut labore et dolore magna</HeaderBold1>
            <SubHeader1>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </SubHeader1>
          </Article1Left>
          <Article1Right>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>{" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Article1Right>
        </Article1Wrapper>
      </Wrapper>
    );
  }
}

export default App;
