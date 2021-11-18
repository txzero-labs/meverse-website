import React, { useState } from "react";
import "./Header.scss";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light Header">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarToggler"
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#about" className="btn">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#rarity" className="btn">
                  Rarity
                </a>
              </li>
              <li className="nav-item">
                <a href="#minting" className="btn">
                  Minting
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="btn">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/MeVerse_"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="bi bi-twitter Icon Icon-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://discord.gg/gT8gtSPkTc"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="bi bi-discord Icon Icon-discord" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
