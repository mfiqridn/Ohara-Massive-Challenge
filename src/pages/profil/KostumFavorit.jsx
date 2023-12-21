import { Container, Row, Col } from "react-bootstrap";
import { kostumfavorit } from "../../data/Kategori";
import { Link } from "react-router-dom";

const KostumFavorit = () => {
  return (
    <div className="kategori min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1>Favorit Saya</h1>
            <h4>Lihat pilihan kostum favoritmu di sini!</h4>
          </Col>
        </Row>
        <Row>
          {kostumfavorit.map((favorit) => {
            return (
              <Col key={favorit.id}>
                <img src={favorit.image} alt="" className="w-100 mb-3" />
                <h5 className="fw-bold mb-3 px-3">{favorit.title}</h5>
                <p className="px-3 mb-0">Rp {favorit.price}</p>
                <p className="px-3">Stok({favorit.stock}) </p>
                <div className="ket d-flex justify-content-between">
                  <Link to="/sewa">
                    <button>{favorit.btn}</button>
                  </Link>
                  <p>
                    <i className="fa-solid fa-heart fa-2xl px-4"></i>
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

export default KostumFavorit;
