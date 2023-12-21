import { Container, Row, Col } from "react-bootstrap";
import { mulaisewa } from "../data/Kategori";
import { Link } from "react-router-dom";

const MulaiSewa = () => {
  return (
    <div className="kategori min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1>Mulai Sewa</h1>
          </Col>
        </Row>
        <Row>
          {mulaisewa.map((mulaisewa) => {
            return (
              <Col key={mulaisewa.id}>
                <img
                  src={mulaisewa.image}
                  alt="gambarkostum"
                  className="w-100 mb-3"
                />
                <h5 className="fw-bold mb-3 px-3">{mulaisewa.title}</h5>
                <p className="px-3 mb-0">{mulaisewa.price}</p>
                <p className="px-3">Stok({mulaisewa.stock}) </p>
                <div className="ket d-flex justify-content-between">
                  <Link to="/sewa">
                    <button>{mulaisewa.btn}</button>
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

export default MulaiSewa;

// import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
// import Data from "../NamaKostum.json";

// const MulaiSewa = () => {
//   const [NamaKostum, setNamaKostum] = useState(Data);
//   console.log(NamaKostum);

//   return (
//     <div className="sewa min-vh-100">
//       <Container>
//         <Row>
//           <Col>
//             <h1>Sewa Sekarang</h1>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default MulaiSewa;
