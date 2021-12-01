import crownImage from "./images/crown.png";

function Rarity() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 col-sm-12">
        <h1 id="rarity">Uniqueness of a Choice</h1>
        <p className="lead">
          There is no predetermined rarity system for our item collection. It
          depends only on your choice. Since you can select items for your
          character, whatever gets chosen the most will have the least value.
          And opposite. You can be creative and make your Meridian stand out!
          Only the rare ones find their equals!
        </p>
        <p className="lead">Choose rare or be square.</p>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 text-center">
        <img
          src={crownImage}
          className="img-fluid"
          alt="Oops.."
          width="450"
          height="300"
        />
      </div>
    </div>
  );
}

export default Rarity;
