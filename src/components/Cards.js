import React from 'react';
import Card from './Card';
import styled from 'styled-components';



export default function Cards(props) {
  return(
    <>
      <ConteinerOfCards>
        {props.cities.map((elem)=> 
            <Card key={elem.id}
            id={elem.id}
            max={elem.max}
            min={elem.min}
            name={elem.name}
            img={elem.img}
            onClose={(e)=>props.onClose(e, elem.id)}
            />
          )
        }
      </ConteinerOfCards>
    </>
  );
};

const ConteinerOfCards = styled.div`
  display: flex;
  align-content: space-around;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px 0px 20px 0px;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
`;

/* export default class Cards extends React.Component{
  constructor(props){
    super(props);

    let state = {}
    this.props.cities.map((elem)=>state[elem.id] = true);

    this.state = {
      visibility: state
    }
    console.log(this.state);
  }
  

  onClose = (e, id) => {
    let newState = this.state.visibility;
    newState[id] = false;
    this.setState({
     visibility: newState
    })
  }

  render(){
    return(
        <>
          <h3>Cards Component</h3>
          <ConteinerOfCards>
            {this.props.cities.map((elem)=> 
                this.state.visibility[elem.id] ?
                <Card key={elem.id}
                max={elem.main.temp_max}
                min={elem.main.temp_min}
                name={elem.name}
                img={elem.weather[0].icon}
                cerrar={(e)=>this.onClose(e,elem.id)}
                />
                : null
                )}
          </ConteinerOfCards>
        </>
    )   
  }; 
}*/