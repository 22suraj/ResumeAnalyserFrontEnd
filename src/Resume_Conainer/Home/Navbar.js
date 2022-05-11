import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [opennav, setopennav] = useState(false);
  return (
    <div className="navbar-parent">
      <nav
        className={
          !opennav
            ? "d-flex bg-new px-9 py-2 navbar-new flex-rows justify-content-between transition-all"
            : "d-flex bg-new px-9 py-2 navbar-fixed-new flex-rows justify-content-between transition-all"
        }
      >
        <span className="brand-name">Resume Analyzer</span>
        <div className="d-flex flex-rows">
          {/* <span className='mx-4 nav-items'>
                Products</span> */}
          <span className="mx-4 nav-items">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </nav>

      <div className="herosection px-10 py-2">
        <div className="bars " onClick={() => setopennav(!opennav)}>
          {""}
        </div>
      </div>
    </div>
  );
}
