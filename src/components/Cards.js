import React from "react";
import Card from "./Card";
import styled from "styled-components";

export default function Cards(props) {
  // const [firstCard, ...cards] = props.cities;
  const [...auxCities] = props.cities;
  const firstCard = auxCities.shift();
  return (
    <>
      <DivFirstCard>
        {firstCard ? (
          <Card
            key={firstCard.id}
            id={firstCard.id}
            max={firstCard.max}
            min={firstCard.min}
            name={firstCard.name}
            img={firstCard.img}
            onClose={(e) => props.onClose(e, firstCard.id)}
          />
        ) : null}
      </DivFirstCard>
      {auxCities.length > 0 ? <hr style={{ borderColor: "black" }} /> : null}
      <ConteinerOfCards>
        {props.cities.map((elem, i) =>
          i >= 1 ? (
            <Card
              key={elem.id}
              id={elem.id}
              max={elem.max}
              min={elem.min}
              name={elem.name}
              img={elem.img}
              onClose={(e) => props.onClose(e, elem.id)}
            />
          ) : null
        )}
      </ConteinerOfCards>
    </>
  );
}

const ConteinerOfCards = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px 0px 20px 0px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const DivFirstCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px 20px 0px;
`;
