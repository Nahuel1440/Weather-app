import React, { useState } from "react";
import styled from "styled-components";
import searchicon from "../img/Search-icon.png";

export default function SearchBar(props) {
  const [city, setCity] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity("");
          return props.onSearch(city);
        }}
      >
        <Div style={{ display: "flex", alingItems: "center" }}>
          <InputSearch
            type="text"
            placeholder=" Ingrese una ciudad"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <Img src={searchicon} alt="" />
        </Div>
      </form>
    </div>
  );
}

const Div = styled.div`
  &:focus-within {
    img {
      filter: brightness(0);
    }
  }
`;

const Img = styled.img`
  padding: 5px 0px 0px 8px;
  max-height: 25px;
  margin: 0px;
  position: absolute;
  pointer-events: none;
  filter: brightness(100);
`;

const InputSearch = styled.input`
  border-radius: 20px;
  height: 30px;
  border: 0;
  width: 0px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  padding-left: 40px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &:focus {
    box-shadow: 0 0 8px 0 dodgerBlue;
    width: 211px;
    background-color: white;
  }
  @media screen and (max-width: 900px) {
    &:focus {
      box-shadow: 0 0 8px 0 dodgerBlue;
      width: 123px;
      background-color: white;
    }
  }
`;
