import React from 'react';
import styled from 'styled-components';
import Botonmenu from './botonmenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './imagenes/logo.png'; 


function Menu() {
    const [clicked, setClicked] = useState(false);
    const hadleClicked = () =>{
        setClicked(!clicked)
    }
    return (
    <>

        <Navbar>
        <img src={logo} alt="Avatar" class="avatar"/>
        <h2><Link to='/'>Darwin <span> Robles</span></Link> </h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <Link to="/" > Perfil </Link>
            <Link to='/estu'>Estudios</Link>
            <Link to='/skil'>Skill</Link>
            <Link to='/expe'>Experiencia</Link>
            <Link to='/conta'>Contacto</Link>
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
margin-bottom: 1rem;
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

