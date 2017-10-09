import React, { Component } from "react";
import styled, { css } from "styled-components";

const ContentContainers = css`flex: 1; text-align: center`;

const MenuWrapper = styled.div`
  display: flex;
  align-self: center;
  position: absolute;
  top: -500px;
  width: 90%;
  height: 500px;
  padding: 10px;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 5px;
  background: white;
  opacity: 0.8;
  transform: ${props =>
    props.visible
      ? "translate(0px, 540px); transition: transform 0.4s ease-out;"
      : "translate(0px, -540px); transition: transform 0.4s ease-in;"};
`;

const ContentLeft = styled.section`${ContentContainers};`;
const ContentCenter = styled.section`${ContentContainers};`;
const ContentRight = styled.section`${ContentContainers};`;

class Menu extends Component {
  render() {
    return (
      <MenuWrapper visible={this.props.visible}>
        <ContentLeft>Oranges</ContentLeft>
        <ContentCenter>Lemons</ContentCenter>
        <ContentRight>Limes</ContentRight>
      </MenuWrapper>
    );
  }
}

export default Menu;
