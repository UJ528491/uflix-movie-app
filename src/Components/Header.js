import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  font-size: 20px;
`;

const List = styled.ul`
  height: 50px;
  width: 100%;
  display: flex;
`;
const Item = styled.li`
  margin: 0 5px;
  width: 50px;
  height: 50px;
  text-align: center;
  .active {
    border-bottom: 3px solid #f39c12;
    transition: border-bottom 0.5s ease-in-out;
  }
`;
const SLInk = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 3px solid transparent;
`;

const headerJs = () => (
  <Header>
    <List>
      <Item>
        <SLInk exact to="/">
          Movies
        </SLInk>
      </Item>
      <Item>
        <SLInk to="/tv">TV</SLInk>
      </Item>
      <Item>
        <SLInk to="/search">Search</SLInk>
      </Item>
    </List>
  </Header>
);

export default headerJs;
