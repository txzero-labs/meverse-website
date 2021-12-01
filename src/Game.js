import constructionImage from "./images/construction.png";
import "./Game.scss";

function Game() {
  return (
    <div className="container d-flex flex-column justify-content-center Game">
      <div className="row my-auto mx-auto">
        <img
          src={constructionImage}
          alt="Ooops..."
          className="img-fluid shadow-sm m-0 p-0 border-blue"
        />
        <h1 className="text-center text-blue mt-4 Hero-title">
          Under construction
        </h1>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Game;
