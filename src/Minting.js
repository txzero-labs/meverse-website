import ethereumImage from "./images/ethereum.png";
import "./Minting.scss";

function Minting() {
  return (
    <div className="row mt-5">
      <div className="col">
        <div className="row text-center">
          <h1 id="minting">Minting</h1>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4 d-none d-md-block d-lg-block d-xl-block d-xxl-block text-center my-auto mx-auto">
            <img src={ethereumImage} className="img-fluid py-3" alt="Ooops.." />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="row mb-3">
              <div className="col-3 text-end Minting-timeline">
                <span className="display-6">10%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="my-auto lead">
                  Flying Meridians. We will airdrop 10 NFT Meridians to random,
                  lucky minters.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 text-end Minting-timeline">
                <span className="display-6">25%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="my-auto lead">Real life drop for 20 Meridians.</p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 text-end Minting-timeline">
                <span className="display-6">50%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="my-auto lead">
                  Giving back to the community. 5000 $ for 10 holders.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 text-end Minting-timeline">
                <span className="display-6">75%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="my-auto lead">
                  For the greater cause! We will donate 100,000$ to the
                  organization by YOUR choice.
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3 text-end Minting-timeline">
                <span className="display-6">100%</span>
              </div>
              <div className="col d-flex flex-column">
                <p className="my-auto lead">
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
