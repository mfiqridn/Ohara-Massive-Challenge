import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../assets/img/logowarsada.png";
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="beranda">
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="fw-bold mx-auto">
              <Nav.Link href="beranda">Beranda</Nav.Link>
              <Nav.Link href="kategori">Kategori</Nav.Link>
              <Nav.Link href="kontak">Kontak</Nav.Link>
            </Nav>
            <div className="login-button">
              <a href="/login" className="p-1">
                <button>Masuk</button>
              </a>
              <a href="/register">
                <button>Daftar</button>
              </a>
              {/* <button>Masuk</button>
              <button>Daftar</button> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
