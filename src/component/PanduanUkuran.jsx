import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import TabelUkuran from "../assets/img/TabelUkuran.png";

const PanduanUkuran = () => {
  return (
    <Container className="info fw-bold pb-3">
      <Tabs
        defaultActiveKey="detail"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="detail" title="Detail">
          <Container className="bg-light rounded-1">
            <Row>
              <Col className="panduan ukuran p-4">
                <p>Bahan Kostum:</p>
                <ul>
                  <li>
                    kain tenun berkualitas tinggi, menciptakan tekstur yang
                    halus dan menawan.
                  </li>
                </ul>
                <p>Terdiri dari:</p>
                <ul>
                  <li>Gelang kiri dan kanan</li>
                  <li>Mahkota bulu</li>
                  <li>Vest leher yang menawan</li>
                </ul>
                <p>Detail Produk :</p>
                <ul>
                  <li>Kondisi Bersih</li>
                  <li>Min. Penyewaan H-1 sebelum penyewaan</li>
                  <li>Digunakan untuk Tarian Modern dan Tradisional</li>
                </ul>
                <p>Kegunaan Produk:</p>
                <ul>
                  <li>Digunakan untuk Tarian Modern dan Tradisional</li>
                </ul>
              </Col>
              <Col className="p-4">
                <p>Warna Kostum:</p>
                <ul>
                  <li>Pink</li>
                  <li>Putih</li>
                  <li>Hitam</li>
                </ul>
                <p>Varian Ukuran yang luas:</p>
                <ul>
                  <li>
                    Tersedia dalam berbagai ukuran, mulai dari anak-anak hingga
                    dewasa, sehingga setiap penari dapat menemukan ukuran yang
                    sesuai dengan tubuh mereka, memastikan penampilan yang
                    selaras
                  </li>
                </ul>
                <p>Anjuran:</p>
                <ul>
                  <li>
                    Harap sertakan pilihan warna lain untuk mempercepat
                    transaksi. Stok warna cepat berubah
                  </li>
                  <li>Semua Warna Ready Stock !</li>
                  <li>Pertanyaan lebih lanjut dapat ditanyakan pada chat</li>
                  <li>Terima Kasih</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="info penting" title="Info Penting">
          <Container className="bg-light rounded-1">
            <Row>
              <Col className="p-4">
                <p>Syarat dan Ketentuan Umum:</p>
                <ul>
                  <li>
                    Pelanggan harus membaca dan setuju dengan syarat dan
                    ketentuan umum penyewaan sebelum melakukan transaksi.
                  </li>
                </ul>
                <p>Biaya Sewa:</p>
                <ul>
                  <li>
                    Penyewa harus membayar biaya sewa sesuai dengan tarif yang
                    ditetapkan.
                  </li>
                  <li>
                    Mungkin ada biaya tambahan untuk asuransi, pembersihan, atau
                    kerusakan.
                  </li>
                </ul>
                <p>Durasi Sewa:</p>
                <ul>
                  <li>Aturan mengenai berapa lama pakaian dapat disewa.</li>
                  <li>
                    Penyewa harus mengembalikan pakaian pada waktu yang telah
                    ditentukan..
                  </li>
                </ul>
                <p>Kondisi Pakaian:</p>
                <ul>
                  <li>
                    Atur aturan terkait kondisi pakaian saat dikembalikan.
                    Misalnya, pelanggan mungkin harus membersihkan atau
                    membersihkan pakaian sebelum dikembalikan.
                  </li>
                </ul>
              </Col>
              <Col className="p-4 ">
                <p>Pengembalian Pakaian:</p>
                <ul>
                  <li>
                    Tentukan dengan jelas di mana dan kapan pakaian harus
                    dikembalikan. Periksa apakah ada biaya keterlambatan.
                  </li>
                </ul>
                <p>Perjanjian Sewa:</p>
                <ul>
                  <li>
                    Pastikan untuk membaca dan memahami semua persyaratan dalam
                    perjanjian sewa sebelum menandatanganinya.
                  </li>
                </ul>
                <p>Kerusakan atau Kehilangan:</p>
                <ul>
                  <li>
                    Jika pakaian rusak atau hilang selama masa sewa, penyewa
                    mungkin bertanggung jawab untuk menggantinya atau membayar
                    biaya perbaikan.
                  </li>
                </ul>
                <p>Pembatalan:</p>
                <ul>
                  <li>
                    Ketahui kebijakan pembatalan, termasuk apakah ada
                    pengembalian uang atau kredit untuk penyewaan yang
                    dibatalkan.
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="panduan ukuran" title="Panduan Ukuran">
          <Container className="ukuran bg-light">
            <Image
              src={TabelUkuran}
              className="rounded mx-auto d-block"
              alt="tabelukuran"
            />
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default PanduanUkuran;
