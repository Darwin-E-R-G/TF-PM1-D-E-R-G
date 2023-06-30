import React from 'react'
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skill() {
  return (
    <div>
       <div >
        <div className="s">
          <div className="s">
            <Card style={{ width: "14em" }}>
              <Card.Img
                variant="top"
                src="https://minimo.io/wp-content/uploads/2021/05/flutter-dev-future.jpeg"
              />
              <Card.Body>
                <Card.Title>Flutter</Card.Title>
                <Card.Text>60%</Card.Text>
                <ProgressBar animated now={60} />
              </Card.Body>
            </Card>
          </div>
          <div className="s">
            <Card style={{ width: "14em" }}>
              <Card.Img
                variant="top"
                src="https://codigoencasa.com/content/images/2021/07/react-blog.png"
              />
              <Card.Body>
                <Card.Title>React</Card.Title>
                <Card.Text>30%</Card.Text>
                <ProgressBar variant="warning" animated now={30} />
              </Card.Body>
            </Card>
          </div>
          <div className="s">
            <Card style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/Z0F7sJaOQtw/maxresdefault.jpg"
              />
              <Card.Body>
                <Card.Title>Java</Card.Title>
                <Card.Text>50%</Card.Text>
                <ProgressBar variant="success" animated now={50} />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="s">
        <div className="s">
          <Card style={{ width: "14em" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/v2/resize:fit:600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
            />
            <Card.Body>
              <Card.Title>CSS</Card.Title>
              <Card.Text>50%</Card.Text>
              <ProgressBar variant="success" animated now={50} />
            </Card.Body>
          </Card>
        </div>
        <div className="s">
          <Card style={{ width: "14em" }}>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-3Op4BEqr9rTwASFjSWvp0s3frABjGyIuw&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>HTML</Card.Title>
              <Card.Text>40%</Card.Text>
              <ProgressBar variant="danger" animated now={60} />
            </Card.Body>
          </Card>
        </div>
        <div className="s">
          <Card style={{ width: "14em" }}>
            <Card.Img
              variant="top"
              src="https://luissoto.website/wp-content/uploads/2020/09/basesDatos.jpg"
            />
            <Card.Body>
              <Card.Title>Base de Datos</Card.Title>
              <Card.Text>20%</Card.Text>
              <ProgressBar variant="danger" animated now={60} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Skill
