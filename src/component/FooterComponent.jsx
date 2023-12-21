import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h5>About Us</h5>
            <p>
              Warsada Gallery adalah Tempat Penyewaan baju adat nusantara,dan
              baju pengantin adat Dayak terlengkap dengan harga sewa yang
              terjangkau yang berada di Pontianak, Kalimantan Barat.
            </p>
            <div className="social mt-3">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </Col>
          <Col>
            <h5>Office</h5>
            <p>
              W8HR+65H, Jl. Sepakat II, Bansir Darat, Kec. Pontianak Tenggara,
              Kota Pontianak, Kalimantan Barat, Indonesia
            </p>
          </Col>
          <Col>
            <h5>Contact</h5>
            <p>Email : warsadagallery.com</p>
            <p>Phone : (+62)813-529-383-85</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
