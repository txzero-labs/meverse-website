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
          </div>
          <div className="col text-center">
            <img src={mimiImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Mimi</h2>
            <p className="lead">
              Machine Learning Engineer with strong Power Engineering
              fundamentals. Looking for new things, hungry for experience.
              Believes that Virtual Worlds are a new frontier.
            </p>
          </div>
          <div className="col text-center">
            <img src={anyaImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Anya</h2>
            <p className="lead">
              Thrilled about building intelligent systems. Always looking for
              new ways to improve things. Currently focused on building Web 3.0,
              block by block.
            </p>
          </div>
          <div className="col text-center">
            <img src={greesinImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Greesin</h2>
            <p className="lead">
              Leader. Marching with my team on the frontiers of the Metaverse,
              driven by innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
