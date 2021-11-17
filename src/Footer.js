import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <nav className="container navbar mt-5">
        <nav className="mx-auto">
          <a
            href="https://twitter.com/MeVerse_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter Navbar-icon Navbar-twitter" />
          </a>
          <a
            href="https://discord.gg/gT8gtSPkTc"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-discord Navbar-icon Navbar-discord" />
          </a>
          <a
            href="https://twitter.com/MeVerse_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube Navbar-icon Navbar-youtube" />
          </a>
        </nav>
      </nav>
    </footer>
  );
}

export default Footer;
