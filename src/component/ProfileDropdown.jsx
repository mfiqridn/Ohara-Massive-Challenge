import React, { useState } from "react";
import { Image } from "react-bootstrap";
import profile from "../assets/img/profile.png";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const Menus = ["Favorit", "Riwayat Sewa", "Logout"];
  const [open, setOpen] = useState(false);
  return (
    <div className="profile">
      <div className="relative">
        <Image
          onClick={() => setOpen(!open)}
          src={profile}
          alt="user"
          className=""
        />
        {open && (
          <div className="profile-down" onClick={() => setOpen(false)}>
            <a href="/kostumfavorit" className="">
              <li>Favorit</li>
            </a>
            <a href="/riwayatsewa" className="">
              <li>Riwayat Sewa</li>
            </a>
            <a href="/login" className="">
              <li>Logout</li>
            </a>
            {/* <ul>
            {Menus.map((menu) => (
              <li key={menu}>{menu}</li>
            ))} */}
            {/* </ul> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
