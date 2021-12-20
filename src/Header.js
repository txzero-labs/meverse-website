import React, { useState } from "react";
import "./Header.scss";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark Header px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/logo192.png"
              alt="Oops..."
              width="60"
              height="48"
              className="d-inline-block align-text-middle"
            />
          </a>
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a href="/game" className="btn">
                  Game
                </a>
              </li>
              <li className="nav-item">
                <a href="/whitepaper" className="btn">
                  Whitepaper
                </a>
              </li>
              <li className="nav-item">
                <a href="/showcase" className="btn">
                  Showcase
                </a>
              </li>
              <li className="nav-item">
                <a href="/mint" className="btn">
                  Mint
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
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
                  href="https://discord.gg/jNZVD3TGnx"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="bi bi-discord Icon Icon-discord" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://medium.com/@meverse"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <i className="bi bi-medium Icon" />
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
