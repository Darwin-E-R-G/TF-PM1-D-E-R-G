import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Conta() {
  return (
     <>
    <div class="wrapper">
    <form class="form">
      <input type="text" class="name entry " placeholder="Your Name"/>
      
      <input type="text" class="email entry" placeholder="Email"/>
      
      <textarea class="message entry" placeholder="Message"></textarea> 
      
      <button class="submit entry" onclick="thanks()">Enviar</button>
    </form>  
  </div>
</>  
     
  )
}

export default Conta
