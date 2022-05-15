import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Card(props) {
  return (
      <ConteinerCard>
        <ButtonClose onClick={props.onClose}>X</ButtonClose>
        <Link to={`/city/${props.id}`}>
          <h4>{props.name}</h4>
          <InfoOfCard>
            <div>
            <p>Min</p>
            <p>{props.min}°</p>
            </div>
            <div>
            <p>Max</p>
            <p>{props.max}°</p>
            </div>
            <img alt='Img de sol' src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
          </InfoOfCard>
        </Link>
      </ConteinerCard>
  )
};

const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: rgba(0,0,0,0.8);
  box-shadow: 2px 2px;
  border-radius: 10px;
  & h4{
    color: white;
  }
  &:hover{
    background-color: black;
  }
  margin: 10px 0px 10px 0px;
  @media screen and (max-width: 900px){
    width:80%;
  }
`;

const InfoOfCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & div{
    align-self: flex-start;
    p {
      color: white;
    }
  } 
`;

const ButtonClose = styled.button`
    align-self: flex-end;
    background-color: transparent;
    border: none;
    color: white;
    border-radius: 5px;
    font-family:bond;
    &:hover{
      background-color: rgba(255,255,255,0.5);
      color: black;
    }
`;
