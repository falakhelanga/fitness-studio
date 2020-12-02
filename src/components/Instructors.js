import React from "react";
import "./instructors.css";
import instructor1 from "../images/instructor1.jpg";
import instructor2 from "../images/instructor2.jpg";
import { Row, Col, Card, Container } from "react-bootstrap";

const Instructors = () => {
  return (
    <div className="instructors_wrapper">
      <div className="instructors_wrapper_color text-center">
        <Container>
          <div
            className="mt-5  "
            style={{
              opacity: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="about_h1 text-center  ">Instructors</h1>

            <Row>
              <Col md={6}>
                <Container>
                  <Card
                    className="instructor_card mb-2"
                    style={{ width: "22rem", height: "600px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={instructor1}
                      className="h-50 p-2 rounded"
                      style={{
                        height: "400px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title as="h2">Nothando Khumalo</Card.Title>
                      <Card.Text as="h3">Personal Trainer</Card.Text>
                      <Card.Text className="card_content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero culpa assumenda maiores. Mollitia, expedita error
                        magni vero praesentium facilis temporibus veniam neque
                        iure architecto quae cupiditate! Nesciunt assumenda
                        voluptatem delectus!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
              <Col md={6}>
                <Container>
                  <Card
                    style={{ width: "22rem", height: "600px" }}
                    className="instructor_card"
                  >
                    <Card.Img
                      variant="top"
                      src={instructor2}
                      className="h-50 p-2 rounded"
                      style={{
                        height: "400px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title as="h2">Phindile Sivela</Card.Title>
                      <Card.Text as="h3">Personal Trainer</Card.Text>
                      <Card.Text className="card_content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero culpa assumenda maiores. Mollitia, expedita error
                        magni vero praesentium facilis temporibus veniam neque
                        iure architecto quae cupiditate! Nesciunt assumenda
                        voluptatem delectus!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Instructors;
