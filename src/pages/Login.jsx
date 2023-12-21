import { Image } from "react-bootstrap";
import google from "../assets/img/icon_google.png";
import facebook from "../assets/img/icon_facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center vh-100">
      <div className="login-form p-4 rounded w-25">
        <form action="">
          <h2 className="text-center mb-5 fw-bold">Masuk</h2>
          <div className="mb-3">
            <strong>Email</strong>
            {/* <label htmlFor="email">
              <strong>Email</strong>
            </label> */}
            <input
              type="email"
              placeholder="Masukkan Email"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <strong>Password</strong>
            {/* <label htmlFor="password"> */}
            {/* <strong>Password</strong> */}
            {/* </label> */}
            <input
              type="password"
              placeholder="Masukkan Password"
              className="form-control"
            />
          </div>
          <button className="btn-masuk mb-3 w-100">
            <Link to="/kategori"></Link>Masuk
          </button>
          <p className="text-center">
            <strong>atau</strong>
          </p>
          <div className="btn-login-sosmed mb-2 ">
            <button className="btn-sosmed mb-2 rounded w-100">
              <Image src={google} alt="" className="p-1" /> Masuk dengan Google
            </button>
            <button className="btn-sosmed mb-2 rounded w-100">
              <Image src={facebook} alt="" className="p-2" />
              Masuk dengan Facebook
            </button>
          </div>
          <p className="text-center">
            Tidak memiliki akun? <Link to="/register">Daftar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
