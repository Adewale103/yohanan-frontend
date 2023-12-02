import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={6}>
          <h1 style={{ color: " #b65fcf" }}>{title}</h1>
          <p>{desc}</p>
          {/* <button className="btn-primary">Visit Products</button> */}
        </Col>
        <Col md={6}>
          <img src={cover} alt="#" />
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
