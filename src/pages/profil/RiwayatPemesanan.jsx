import { Container, Row, Col } from "react-bootstrap";
import { riwayatpemesanan } from "../../data/Kategori";
import { Link } from "react-router-dom";

const RiwayatPemesanan = () => {
  return (
    <div className="kategori min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1>Riwayat Pemesanan</h1>
            <h4>Lihat kostum apa saja yang pernah kamu sewa</h4>
          </Col>
        </Row>
        <Row>
          {riwayatpemesanan.map((riwayat) => {
            return (
              <Col key={riwayat.id}>
                <img src={riwayat.image} alt="" className="w-100 mb-3" />
                <h5 className="fw-bold mb-3 px-3">{riwayat.title}</h5>
                <p className="px-3 mb-3">{riwayat.text}</p>
                <Link to="/">
                  <button className="btn align-items-center">
                    {riwayat.btn}
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

export default RiwayatPemesanan;
