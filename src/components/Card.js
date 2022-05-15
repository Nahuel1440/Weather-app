import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Card({ name, id, min, max, img, onClose }) {
  return (
    <ConteinerCard>
      <ButtonClose onClick={onClose}>X</ButtonClose>
      <Link to={`/city/${id}`}>
        <h2>{name}</h2>
        <InfoOfCard>
          <div>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div>
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <img
            alt="Img de sol"
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          />
        </InfoOfCard>
      </Link>
    </ConteinerCard>
  );
}

const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px;
  border-radius: 10px;
  & h2 {
    color: white;
    margin: 0px;
  }
  &:hover {
    background-color: black;
  }
  & a {
    text-decoration: none;
    text-align: center;
  }
  margin: 10px 0px 10px 0px;
  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const InfoOfCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & div {
    p {
      color: white;
      font-size: 1rem;
    }
  }
`;

const ButtonClose = styled.button`
  align-self: flex-end;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: none;
  margin: 5px 3px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
  }
`;
