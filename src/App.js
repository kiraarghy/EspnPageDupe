import React, { Component } from "react";
import styled, { css } from "styled-components";

import Menu from "./Menu";

const Wrapper = styled.div`font-family: "Roboto", sans-serif;`;

const SubHeader = `color: rgb(218, 218, 218);`;
const HeaderBold = `font-weight: bold;`;
const Header1 = `font-size: 2em;`;
const Header2 = `font-size: 1.5em;`;

const NavWrapper = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeaderLeft = styled.span`
  margin: 10px;
  ${HeaderBold};
`;

const ButtonMenu = styled.div`
  width: 20px;
  border-color: #202020;
`;

const transformSingleToX = css`
  border-radius: 1px;
  position: relative;
  top: 4px;
  left: 1px;
  z-index: 2;
  transform: rotate(45deg);
  transition: transform 1s ease-out;
`;

const MenuSingle = ButtonMenu.extend`
  height: 0px;
  border-style: solid;
  border-width: 0px 0px 3px 0px;
  border-radius: 1px 1px 0px 0px;
  ${props => (props.visible ? transformSingleToX : "")};
`;

const transformDoubleToX = css`
  border-style: solid;
  border-width: 0px 0px 3px 0px;
  border-radius: 1px;
  position: relative;
  top: -1px;
  left: -1px;
  z-index: 1;
  transform: rotate(-45deg);
  transition: transform 1s ease-out;
`;

const MenuDouble = ButtonMenu.extend`
  height: 3px;
  border-style: double;
  border-width: 0px 0px 9px 0px;
  border-radius: 1px;
  ${props => (props.visible ? transformDoubleToX : "")};
`;

const MenuButton = styled.button`
  border: none;
  align-self: flex-end;
  background: rgba(0, 0, 0, 0);
  margin: 10px 30px 10px 0px;
  outline: none;
`;

const TopLeftHeaderWrapper = styled.header`display: flex;`;

const SecondHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin: 80px 10px 60px 10px;
`;

const HeaderBold1 = styled.header`${HeaderBold} ${Header1};`;

const SubHeader1 = styled.header`${SubHeader} ${Header1};`;

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
`;

const Article1Left = styled.section`
  flex: 1;
  margin: 10px;
`;

const HeaderBold2 = styled.header`${HeaderBold} ${Header2};`;

const SubHeader2 = styled.header`${SubHeader} ${Header2};`;

const Article1Right = styled.section`
  flex: 1;
  margin: 0px 10px 0px 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <MenuButton onClick={this.handleClick}>
            <MenuSingle visible={this.state.visible} />
            <MenuDouble visible={this.state.visible} />
          </MenuButton>
          <Menu visible={this.state.visible} />
        </NavWrapper>
        <TopLeftHeaderWrapper>
          <HeaderLeft>
            <span>Kara.</span>
          </HeaderLeft>
        </TopLeftHeaderWrapper>
        <SecondHeaderWrapper>
          <HeaderBold1>Lorem Ipsum Dolor</HeaderBold1>
          <SubHeader1>Sed do eiusmod tempor</SubHeader1>
        </SecondHeaderWrapper>
        <ParallaxImg />
        <Article1Wrapper>
          <Article1Left>
            <HeaderBold2>Incididunt ut labore et dolore magna</HeaderBold2>
            <SubHeader2>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </SubHeader2>
          </Article1Left>
          <Article1Right>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
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
