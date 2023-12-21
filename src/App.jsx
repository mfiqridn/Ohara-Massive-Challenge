import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Kategori from "./pages/Kategori";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MulaiSewa from "./pages/MulaiSewa";
// import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
// import JenisKostumKultural from "./pages/jeniskategori/JenisKostumKultural";
import KategoriKultural from "./pages/jeniskategori/KategoriKultural";
// import PanduanUkuran from "./component/PanduanUkuran";
import Sewa from "./pages/Sewa";
import KostumFavorit from "./pages/profil/KostumFavorit";
import RiwayatPemesanan from "./pages/profil/RiwayatPemesanan";
import NavbarAftLogin from "./component/NavbarAftLogin";
// import PilihTanggal from "./component/PilihTanggal";
// import DeskripsiKostum from "./component/DeskripsiKostum";
// import CardPesan from "./component/CardPesan";
// import ProfileDropdown from "./component/ProfileDropdown";

const App = () => {
  return (
    <div>
      {/* <NavbarComponent /> */}
      <NavbarAftLogin />

      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mulaisewa" element={<MulaiSewa />} />
          <Route path="/kategorikultural" element={<KategoriKultural />} />
          {/* <Route path="kostumkultural/:id" element={<JenisKostumKultural />} /> */}
          <Route path="kostumfavorit" element={<KostumFavorit />} />
          <Route path="riwayatsewa" element={<RiwayatPemesanan />} />
          {/* <Route path="tanggal" element={<PilihTanggal />} /> */}
          {/* <Route path="panduanukuran" element={<PanduanUkuran />} /> */}
          {/* <Route path="deskripsikostum" element={<DeskripsiKostum />} /> */}
          {/* <Route path="pesan" element={<CardPesan />} /> */}
          {/* <Route path="profile" element={<ProfileDropdown />} /> */}

          <Route path="/sewa" element={<Sewa />} />
        </Routes>
      </Router>

      <FooterComponent />
    </div>
  );
};

export default App;
