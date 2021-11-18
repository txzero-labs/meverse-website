import djapeImage from "./images/djape.svg";
import mimiImage from "./images/mimi.svg";
import dakaImage from "./images/daka.svg";
import anyaImage from "./images/anya.svg";
import greesinImage from "./images/greesin.svg";

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
            <p className="lead">True friend. Squad goals.</p>
          </div>
          <div className="col text-center">
            <img src={mimiImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Mimi</h2>
            <p className="lead">
              Adventurer. Experience over things. Journey over destination.
            </p>
          </div>
          <div className="col text-center">
            <img src={dakaImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Daka</h2>
            <p className="lead">
              Chad. It was an easy decision who Chad is in this group!
            </p>
          </div>
          <div className="col text-center">
            <img src={anyaImage} alt="Oops.." width="200" height="200" />
            <h2 className="">Anya</h2>
            <p className="lead">Thinker. Building Web 3.0, block by block.</p>
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
