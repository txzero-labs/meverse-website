import djapeImage from "./images/djape.svg";
import mimiImage from "./images/mimi.svg";
import dakaImage from "./images/daka.svg";
import anyaImage from "./images/anya.svg";
import greesinImage from "./images/greesin.svg";
import "./Team.scss";

function Team() {
  return (
    <div className="row mt-5">
      <div className="col">
        <div className="row text-center">
          <h1 id="team">Team</h1>
        </div>
        <div className="row d-flex">
          <div className="col text-center">
            <img src={djapeImage} alt="Oops.." width="200" height="200" />
            <h2 className="">DJ Ape</h2>
            <p className="lead">
              Engineer who found a combination of programming, mathematics and
              research in artificial intelligence. I find fun in games, anime,
              books and interesting discussions. Always seeking new knowledge,
              ways to improve myself and also challenging problems that will
              push me out of my comfort zone. Web 3.0 is next on my list.
            </p>
            <a
              href="https://www.linkedin.com/in/predrag-njegovanovic/"
              target="_blank"
              rel="noreferrer"
              className="TeamIcon"
            >
              <i className="bi bi-linkedin Icon-linkedin" />
            </a>
          </div>
          <div className="col text-center">
            <img src={dakaImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Daka</h2>
            <p className="lead">
              The creative force behind MeVerse. 2D animator by day, cartoon
              artist by night. Thinks that visuals express ideas, vision,
              beliefs, culture, and purpose faster, better, and more deeply than
              any other method of communication.
            </p>
            <a
              href="https://www.linkedin.com/in/david-dubajic-8b9920197/"
              target="_blank"
              rel="noreferrer"
              className="TeamIcon"
            >
              <i className="bi bi-linkedin Icon-linkedin" />
            </a>
          </div>
          <div className="col text-center">
            <img src={mimiImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Mimi</h2>
            <p className="lead">
              Machine Learning Engineer with strong Power Engineering
              fundamentals. Looking for new things, hungry for experience.
              Believes that Virtual Worlds are a new frontier.
            </p>
            <a
              href="https://www.linkedin.com/in/milivoje-popovac-93344217b/"
              target="_blank"
              rel="noreferrer"
              className="TeamIcon"
            >
              <i className="bi bi-linkedin Icon-linkedin" />
            </a>
          </div>
          <div className="col text-center">
            <img src={anyaImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Anya</h2>
            <p className="lead">
              Thrilled about building intelligent systems. Always looking for
              new ways to improve things. Currently focused on building Web 3.0,
              block by block.
            </p>
            <a
              href="https://www.linkedin.com/in/nemanja-milicevic"
              target="_blank"
              rel="noreferrer"
              className="TeamIcon"
            >
              <i className="bi bi-linkedin Icon-linkedin" />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://twitter.com/itz_nemanja"
              target="_blank"
              rel="noreferrer"
              className="TeamIcon"
            >
              <i className="bi bi-twitter Icon-twitter" />
            </a>
          </div>
          <div className="col text-center">
            <img src={greesinImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Greesin</h2>
            <p className="lead">
              Leader. Marching with my team on the frontiers of the Metaverse,
              driven by innovation.
            </p>
            <a
              href="https://twitter.com/FilipBaturan"
              target="_blank"
              rel="noreferrer"
              className="TeamIcon"
            >
              <i className="bi bi-twitter Icon-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
