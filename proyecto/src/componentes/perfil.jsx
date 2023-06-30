import React from "react";
import Perf from "./componeteperfil/perf";
import logo from "./imagenes/logo.png";

function Perfil() {
  return (
    <div className="q expe" style={{height:"730px"}}>
      <div className="wrapper">
        <img src={logo} alt="Avatar2" className="avatar2" />
        <Perf></Perf>
      </div>
    </div>
  );
}

export default Perfil;
