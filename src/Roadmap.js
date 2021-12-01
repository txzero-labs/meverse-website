function Roadmap() {
  return (
    <div className="row mt-5">
      <div className="row mb-4 text-center">
        <h1 id="roadmap">
          Roadmap <span className="text-blue">1.0</span>
        </h1>
      </div>
      <div className="row row-cols-2 w-100">
        <div className="col">
          <h2>
            <span className="text-orange">1</span>&nbsp;&nbsp; Presale
          </h2>
          <ul className="lead List">
            <li>
              Between 13/12/21 and 18/12/21 Exact date will be announced shortly
              before
            </li>
            <li>Only whitelisted members</li>
            <li>Max 5 NFTs per wallet</li>
            <li>Total 2,500 NFTs</li>
            <li>
              Price of 0.06 ETH (subject to change based on ETH price at the
              presale time)
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>
            <span className="text-orange">2</span>&nbsp;&nbsp; Public Sale
          </h2>
          <ul className="lead List">
            <li>3 days after presale event</li>
            <li>Open to everyone</li>
            <li>Max 3 NFTs per wallet</li>
            <li>
              Price of 0.07 ETH (subject to change based on ETH price at the
              presale time)
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>
            <span className="text-orange">3</span>&nbsp;&nbsp; Game Start
          </h2>
          <ul className="lead List">
            <li>Starts 1-3 weeks after public mint</li>
            <li>Game starting with already minted Meridians</li>
            <li>Opportunity to mint more Meridians in the process</li>
            <li>Minting Virtues for Meridian karma $MVK passive income</li>
          </ul>
        </div>
        <div className="col">
          <h2>
            <span className="text-orange">4</span>&nbsp;&nbsp; Future
          </h2>
          <ul className="lead List">
            <li>Additional MeVerse Game assets expansion</li>
            <li>Release of Roadmap 2.0 (Multiplayer mode)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
