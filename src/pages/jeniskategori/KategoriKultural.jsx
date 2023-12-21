import { Container, Row, Col } from "react-bootstrap";
import { kategorikultural } from "../../data/Kategori";
import { Link } from "react-router-dom";

const KategoriKultural = () => {
  return (
    <div className="kategori w-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Kostum Kultural</h1>
            <p className="text-center">
              Kostum tradisional dari berbagai budaya seperti baju suku yang
              <br />
              ada di Indonesia seperti baju adat sayak, kimono Jepang, sari
              <br />
              India, hanbok Korea, atau kostum suku Indian Amerika..
            </p>
          </Col>
        </Row>
        <Row>
          {kategorikultural.map((kultural) => {
            return (
              <Col key={kultural.id}>
                <img src={kultural.image} alt="" className="w-100 mb-3" />
                <h5 className="fw-bold mb-3 px-3">{kultural.title}</h5>
                <p className="px-3 mb-0">Rp {kultural.price}</p>
                <p className="px-3">Stok({kultural.stock}) </p>
                <div className="ket d-flex justify-content-between">
                  <Link to="/sewa">
                    <button>{kultural.btn}</button>
                  </Link>
                  <p>
                    <i className="fa-regular fa-heart fa-2xl px-4"></i>
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default KategoriKultural;
