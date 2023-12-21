import { Container, Row, Col } from "react-bootstrap";
import { kategorikostum } from "../data/Kategori";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Kategori = () => {
  // let navigate = useNavigate();
  return (
    <div className="kategori min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1>KATEGORI</h1>
          </Col>
        </Row>
        <Row>
          {kategorikostum.map((kategori) => {
            return (
              <Col key={kategori.id}>
                <img src={kategori.image} alt="" className="w-100 mb-3" />
                <h5 className="fw-bold mb-3 px-3">{kategori.title}</h5>
                <p className="mb-3 px-3">{kategori.text}</p>
                <Link to="/kategorikultural">
                  <button className="btn align-items-center">
                    Lihat Selengkapnya
                  </button>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Kategori;
