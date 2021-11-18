import crownImage from "./images/crown.svg";

function Rarity() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 col-sm-12">
        <h1 id="rarity">Rarity</h1>
        <p className="lead">
          There is no predetermined rarity system for our item collection. It
          depends only on your choice. Since you can select items for your
          character, whatever gets chosen the most will have the least value.
          And opposite. You can be creative and make your Meridian stand out!
          And, in addition, we are introducing a completely new perspective into
          the Rarity System. Through your real/desired/chosen personality
          traits. Just wait.
        </p>
      </div>
      <div className="col-md-6 col-sm-12 text-center my-auto">
        <img
          src={crownImage}
          className="img-fluid"
          alt="Oops.."
          width="300"
          height="300"
        />
      </div>
    </div>
  );
}

export default Rarity;
