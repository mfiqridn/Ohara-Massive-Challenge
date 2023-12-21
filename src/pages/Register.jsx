import { Image } from "react-bootstrap";
import google from "../assets/img/icon_google.png";
import facebook from "../assets/img/icon_facebook.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="register-form p-4 rounded w-25">
        <form action="">
          <h2 className="text-center mb-5 fw-bold">Daftar</h2>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Masukkan Email"
              className="form-control bg-white"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Kata Sandi</strong>
            </label>
            <input
              type="password"
              placeholder="Masukkan Kata Sandi"
              className="form-control bg-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm password">
              <strong>Konfirmasi Kata Sandi</strong>
            </label>
            <input
              type="password"
              placeholder="Konfirmasi Kata Sandi"
              className="form-control bg-white"
            />
          </div>
          <button className="btn-daftar mb-3 w-100">Daftar</button>
          <p className="text-center">
            <strong>atau</strong>
          </p>
          <div className="btn-login-sosmed align-content-center mb-3">
            <button className="btn-google mb-2 rounded w-100">
              <Image src={google} alt="" className="p-1" /> Daftar dengan Google
            </button>
            <button className="btn-fb mb-2 rounded w-100">
              <Image src={facebook} alt="" className="p-1" />
              Daftar dengan Facebook
            </button>
          </div>
          <p className="text-center">
            Punya akun? <Link to="/login">Masuk</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
