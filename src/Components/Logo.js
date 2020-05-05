import React from "react";
import "./style.css";
import logo from "./assets/Loader.png";
function Logo() {
  return (
    <div>
      <div className="logo-header">
        <img
          src={logo}
          className="Spinner-logo"
          style={{ justifyContent: "center", alignContent: "center" }}
        />
      </div>
    </div>
  );
}

export default Logo;
