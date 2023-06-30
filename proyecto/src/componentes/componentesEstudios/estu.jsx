import React from "react";
import Card from "react-bootstrap/Card";

export default function Estudi(props) {
  return (
    <div className="q">
      <div className="s">
        <Card style={{ width: "15em",  height:"25em" }}>
          <Card.Img
            variant="top"
            src="https://iecrp.edu.co/web/wp-content/uploads/2019/07/escudo_web.png"
          />
          <Card.Body>
            <Card.Title>INSTITUCIÓN EDUCATIVA CARLOS RAMIREZ PARIS</Card.Title>
            <br/>
            <Card.Text>Bachiller</Card.Text>
            
          </Card.Body>
        </Card>
      </div>
      <div className="s">
        <Card style={{ width: "14em",  height:"25em" }}>
          <Card.Img
            variant="top"
            src="https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png"
          />
          <Card.Body>
            <Card.Title>Servicio Nacional de Aprendizaje (SENA)</Card.Title>
            <br/>
            <br/>
            <Card.Text>Tecnico en Sistemas</Card.Text>
           
          </Card.Body>
        </Card>
      </div>
      <div className="s">
        <Card style={{ width: "14em",  height:"25em" }}>
          <Card.Img
            variant="top"
            src="http://www.iser.edu.co/iser/hermesoft/portalIG/home_1/recursos/documentos_generales/2022/05082022/id_corp_logo_vert_colores.png"
          />
          <Card.Body>
            <Card.Title>INSTITUTO SUPERIOR DE EDUCACIÓN RURAL - ISER</Card.Title>
            <Card.Text>Tecnología en Gestión de Redes y Sistemas Teleinformáticos</Card.Text>
           
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
