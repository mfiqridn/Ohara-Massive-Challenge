import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import gallery1 from "../assets/img/gallery1.jpg";
import gallery2 from "../assets/img/gallery2.jpg";
import gallery3 from "../assets/img/gallery3.jpg";

const Beranda = () => {
  let navigate = useNavigate();
  return (
    <div className="beranda">
      <header className="w-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">
                Penampilan anda, Impian Kami <br />
                Warsada Gallery
              </h1>
              <p className="text-center">
                Raih kesan tak terlupakan setiap saat dengan pakaian anda
              </p>
            </Col>
            <Row>
              <Col className="text-center">
                <button
                  className="btn-sewa"
                  onClick={() => navigate("/mulaisewa")}
                >
                  Mulai Sewa Sekarang
                </button>
              </Col>
            </Row>
          </Row>
        </Container>
      </header>
      <div>
        <h1 className="text-center fw-bold">GALLERY</h1>
      </div>
      <div className="gallery min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <Image src={gallery1} alt="" className="w-100 rounded-3" />
            </Col>
            <Col>
              <Image src={gallery2} alt="" className="w-100 rounded-3" />
            </Col>
            <Col>
              <Image src={gallery3} alt="" className="w-100 rounded-3" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pengalaman">
        <Container>
          <Row>
            <Col>
              <Image src={gallery2} alt="" />
            </Col>
            <Col>
              <h1>
                7 tahun +
                <br />
                pengalaman
              </h1>
              <p>
                Warsada Gallery adalah Tempat Penyewaan baju adat nusantara,dan
                baju pengantin adat Dayak terlengkap dengan harga sewa yang
                terjangkau yang berada di Pontianak, Kalimantan Barat.
              </p>
              <p>
                Dengan kualitas bahan yang premium dan sangat bagus, warsada
                gallery menawarkan banyak keuntungan yang bisa didapatkan
                consumen. hanya dengan uang yang terjangkau consument sudah bisa
                merasakan serta mengabadikan momen momen mereka menggunakan
                pakaian adat pada acara yang di impikan.
              </p>
              <p>
                Dengan menawarkan harga yang sangat terjangkau dan bahan dengan
                kualitas premium selama lebih dari 7 tahun warsada gallery
                mendapatkan ulasan baik di banyak website di internet.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">TESTIMONIAL</h1>
              <p className="text-center">
                Apa kata orang tentang warsada gallery
              </p>
            </Col>
            <Row>
              <Col></Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Beranda;
