import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const Kontak = () => {
  return (
    <div className="kontak pt-5">
      {/* <header className="w-100"> */}
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Kontak Kami</h1>
            <p className="text-center">
              Ada pertanyaan atau komentar? Cukup tulis pesan kepada kami!{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div className="kontak-kami">
              <Container className="container-out">
                <Container className="container-in">
                  <Row>
                    <Col>
                      <div className="info-kontak">
                        <h5 className="text-center">Informasi Kontak</h5>
                        <p className="text-center">
                          Katakan sesuatu untuk
                          <br />
                          memulai obrolan langsung!
                        </p>
                        <div className="no">
                          <i className="fa-solid fa-phone-volume"></i>
                          <p className="itext">081352938385</p>
                        </div>
                        <div className="mail">
                          <i className="fa-solid fa-envelope"></i>
                          <p className="itext">sanggarwarsada@gmail.com</p>
                        </div>
                        <div className="location">
                          <i className="fa-solid fa-location-dot"></i>
                          <p className="itext">
                            Jl. Sepakat 2 Ujung, Samping Komp. Grand Sepakat
                            Residence (ADA TANGGA KAYU)
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col className="col-right">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nama Pertama</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>No. Handphone</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Belakang</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Kirim Pesan
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="kontak-kami">
        <Container className="container-out">
          <Container className="container-in">
            <Row>
              <Col>
                <div className="info-kontak">
                  <h5 className="text-center">Informasi Kontak</h5>
                  <p className="text-center">
                    Katakan sesuatu untuk
                    <br />
                    memulai obrolan langsung!
                  </p>
                  <div className="no">
                    <i className="fa-solid fa-phone-volume"></i>
                    <p className="itext">081352938385</p>
                  </div>
                  <div className="mail">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="itext">sanggarwarsada@gmail.com</p>
                  </div>
                  <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="itext">
                      Jl. Sepakat 2 Ujung, Samping Komp. Grand Sepakat Residence
                      (ADA TANGGA KAYU)
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-right">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Pertama</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>No. Handphone</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Belakang</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Kirim Pesan
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </div> */}
    </div>
  );
};

export default Kontak;
