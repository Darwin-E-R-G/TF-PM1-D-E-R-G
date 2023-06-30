import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
function Expe() {
  return (
    <div className="q">
      <div className="s">
        <Card style={{ width: "14em" ,  height:"18em"}}>
          <Card.Img
            variant="top"
            src="https://tuataras.net/wp-content/uploads/Persona-programando.png"
          />
          <Card.Body>
            <Card.Title>Desarrollador</Card.Title>
            <Card.Text>
            05/06/2023
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="s">
        <Card style={{ width: "14em" ,  height:"18em"}}>
          <Card.Img
            variant="top"
            src="https://tuataras.net/wp-content/uploads/Persona-programando.png"
          />
          <Card.Body>
            <Card.Title>Desarrollador</Card.Title>
            <Card.Text>
            05/06/2023
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="s">
        <Card style={{ width: "14em" ,  height:"18em"}}>
          <Card.Img
            variant="top"
            src="https://tuataras.net/wp-content/uploads/Persona-programando.png"
          />
          <Card.Body>
            <Card.Title>Desarrollador</Card.Title>
            <Card.Text>
              05/06/2023
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Expe;
