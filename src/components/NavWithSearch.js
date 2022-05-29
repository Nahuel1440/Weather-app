import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.8);
`;

const Div = styled.div`
  margin: 0px 69px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 45px;
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
  @media screen and (max-width: 900px) {
    margin: 0px 10px;
  }
`;

export default function NavWithSearch(props) {
  return (
    <Header>
      <Div>
        <a href="/">The weather app</a>
        {/* <NavLink to="/about">About</NavLink> */}
        <SearchBar onSearch={props.onSearch} />
      </Div>
    </Header>
  );
}
