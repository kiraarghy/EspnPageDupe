import React, { Component } from "react";
import styled, { css } from "styled-components";

const ContentContainers = css`
flex: 1;`

const DropDown = css`
display: flex;
-webkit-transition: height 1s ease-in-out;
-moz-transition: height 1s ease-in-out;
-o-transition: height 1s ease-in-out;
transition: height 1s ease-in-out;
height: 500px;
`

const MenuWrapper = styled.div`
display: none;
background: white;
flex-direction: row;
${props => (props.visible ? DropDown : "none")};
`;

const ContentLeft = styled.section`${ContentContainers}`
const ContentCenter = styled.section`${ContentContainers}`
const ContentRight = styled.section`${ContentContainers}`

class Menu extends Component {

  render() {
    return (
      <MenuWrapper visible= {this.props.visible}>
        <ContentLeft>Oranges</ContentLeft>
        <ContentCenter>Lemons</ContentCenter>
        <ContentRight>Limes</ContentRight>
      </MenuWrapper>
    );
  }
}

export default Menu;
