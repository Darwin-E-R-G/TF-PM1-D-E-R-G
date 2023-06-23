import React from 'react';
import styled from 'styled-components';
import Botonmenu from './botonmenu';
import { useState } from 'react';


function Menu() {
    const [clicked, setClicked] = useState(false);
    const hadleClicked = () =>{
        setClicked(!clicked)
    }
    return (
    <>
        <Navbar>
        <h2>Darwin <span> Robles</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a href="">Perfil</a>
            <a href="">Estudios</a>
            <a href="">Skill</a>
            <a href="">Experiencia</a>
            <a href="">Contacto</a>
        </div>
        <div className='boton'><Botonmenu clicked = {clicked} hadleClicked= {hadleClicked}/></div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </Navbar>
    </>
    );
}

export default Menu

const Navbar = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
padding: .7rem;
background-color:#333;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-rght: auto;
    text-align: center;
    transition: all .5s ease;
    a{
        color: white;
        font-size: 2rem;
        display: block;
    }
    @media(min-width: 500px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
        }
    }
}
.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    text-align: center;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
    }

}
.boton{
    @media(min-width: 500px){
        display: none;
    }
}
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

