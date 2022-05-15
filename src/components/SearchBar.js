import React, { useState } from "react";
import styled from "styled-components";
/* import searchicon from '../img/Search-icon.png' */

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
        <InputSearch
          type="text"
          placeholder=" Ingrese una ciudad"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <ButtonSearch type="submit">Agregar</ButtonSearch>
      </form>
    </div>
  );
}

const ButtonSearch = styled.button`
  background-color: #191919;
  color: white;
  border-radius: 6px;
  margin-left: 3px;
  margin-right: 6px;
  height: 35px;
  font-family: sans-serif;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const InputSearch = styled.input`
  border-radius: 20px;
  height: 30px;
  border: 0;
  outline: none;
  padding-left: 40px;
  &:focus {
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
