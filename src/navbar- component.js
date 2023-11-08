// Navbar.js (หรือ Navbar.jsx)
import React from 'react';

const NavbarComponent = (props) => {
  const navStyles = {
    // รายละเอียดสไตล์ของ Navbar ที่คุณต้องการ
    backgroundColor: "#1B1B1B",
    textAlign: "center",
    boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.25)",
    top: 0,
    position: "fixed-top",
    width: "100%",
    height: "80px",
  };

  return (
    <nav className="navbar mb-5" style={navStyles}>
      <div className="container-fluid">
        <div className="mx-auto" style={{ fontSize: "50px", color: "white", fontWeight: "bold" }}>{props.title}</div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
