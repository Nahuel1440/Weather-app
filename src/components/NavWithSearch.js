import React from "react";
import SearchBar from './SearchBar'
import styled from "styled-components";
import logo from "../img/logoHenry.png"
import { Link } from 'react-router-dom';

const Div = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.8);
    & span{
        color: white;
        font-weight: bold;
    }
    
`;

export default function NavWithSearch(props){
    return(
        <Div>
            <div style={{display:"flex", justifyContent:"space-around", alignItems: "baseline", width: "300x"}}> {/* Convertir a conponente */}
                <Link to='/'>
                    <img src={logo} alt="Img de Henry"/>
                    <span> Henry-The weather app</span>
                </Link>
                <Link to='/about'>
                    <span style={{marginLeft: "20px"}}>About</span> {/*Convertir componente */}
                </Link>
            </div>
           <SearchBar onSearch={props.onSearch}/> 
        </Div>
    );
}