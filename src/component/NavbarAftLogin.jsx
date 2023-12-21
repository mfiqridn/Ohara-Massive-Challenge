import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../assets/img/logowarsada.png";
import { Link, NavLink } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const NavbarAftLogin = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="beranda">
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-list fw-bold mx-auto">
              <Nav.Link className="" href="beranda">
                Beranda
              </Nav.Link>
              <Nav.Link className="" href="kategori">
                Kategori
              </Nav.Link>
              <Nav.Link className="" href="kontak">
                Kontak
              </Nav.Link>
            </Nav>
            <div className="profile">
              <ProfileDropdown />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAftLogin;
