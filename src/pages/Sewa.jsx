import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import KostummKultural from "../assets/img/KostummKultural.jpg";
import PanduanUkuran from "../component/PanduanUkuran";
import DeskripsiKostum from "../component/DeskripsiKostum";

const Sewa = () => {
  return (
    <div className="sewa p-5 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1>SEWA</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={KostummKultural} alt="" />
          </Col>
          <Col>
            <DeskripsiKostum />
          </Col>
        </Row>
      </Container>
      <div className="sewa">
        <PanduanUkuran />
      </div>
    </div>
  );
};

export default Sewa;
