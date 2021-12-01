import elvisImage from "./images/elvis.png";

function About() {
  return (
    <div className="row mt-5">
      <div className="col-md-7 col-sm-12 order-md-last">
        <h1 id="about">MeVerse Vision</h1>
        <p className="lead">
          A place where you can choose to be anything. A game of risking,
          lending, and borrowing, where your goal is to fulfill the prophecy,
          collect karma ($MVK), and become&nbsp;
          <span className="text-blue fw-bold">The One</span>. First NFT-based
          game that introduces principles of lending, borrowing, and NFT as
          collateral!
        </p>
        <p className="lead">
          Before boarding on the MeVerse adventure, we want to give you, for the
          first time, the opportunity to choose how you start your journey.
          There is an excess of items for your character, which directly
          influence the rarity of NFTs. But that is not the only dilemma!
          Everyone has a unique personality, right? What is yours? Choose the
          personality traits to your liking and place yourself or your Meridian
          into a different group. How cool is that?
        </p>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 d-flex flex-column">
        <img
          src={elvisImage}
          className="img-fluid mx-auto my-auto"
          alt="Oops.."
        />
      </div>
    </div>
  );
}

export default About;
