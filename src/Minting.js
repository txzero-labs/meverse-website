import sketchImage from "./images/sketch.png";
import "./Minting.scss";

function Minting() {
  return (
    <div className="row">
      <div className="col">
        <div className="row mt-3">
          <div className="col-lg-5 d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex">
            <img
              src={sketchImage}
              className="img-fluid mx-auto"
              alt="Ooops.."
            />
          </div>
          <div className="col-lg-7 col-sm-12 d-flex flex-column justify-content-center">
            <div className="row text-center">
              <h1 id="minting">Minting</h1>
            </div>
            <div className="row ">
              <div className="col-3 col-lg-2 my-auto text-end Minting-timeline">
                <span className="display-6">10%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="lead">
                  Flying Meridians. We will airdrop 10 NFT Meridians to random,
                  lucky minters.
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-3 col-lg-2 my-auto text-end Minting-timeline">
                <span className="display-6">25%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="lead">Real life drop for 20 Meridians.</p>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-3 col-lg-2 my-auto text-end Minting-timeline">
                <span className="display-6">50%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="lead">
                  Giving back to the community. 5000 $ for 10 holders.
                </p>
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-3 col-lg-2 my-auto text-end Minting-timeline">
                <span className="display-6">75%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="lead">
                  For the greater cause! We will donate 100,000$ to the
                  organization by YOUR choice.
                </p>
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-3 col-lg-2 my-auto text-end Minting-timeline">
                <span className="display-6">100%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="lead">
                  Gigameridians. There will be one ultra-rare Meridian for each
                  group. Pray that you will be one of the lucky winners, because
                  if you are, you won’t be the same person ever again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Minting;
