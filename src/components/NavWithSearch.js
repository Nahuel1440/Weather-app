import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import logo from "../img/icons-weather.png";
import { NavLink } from "react-router-dom";

const DivBar = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;

const Div = styled.div`
  margin: 0px 69px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  & a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
  }
  & img {
    height: 70px;
    width: auto;
  }
`;

export default function NavWithSearch(props) {
  return (
    <DivBar>
      <Div>
        <div>
          <a href="/">The weather app</a>
          {/* <NavLink to="/about">About</NavLink> */}
        </div>
        <SearchBar onSearch={props.onSearch} />
      </Div>
    </DivBar>
  );
}
