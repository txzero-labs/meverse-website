import itemsImage from "./images/meverse-items.png";
import theOneImage from "./images/meverse-the-one.png";
import personalityImage from "./images/meverse-personality.png";
import sketchImage from "./images/sketch.png";
import "./Whitepaper.scss";

function Whitepaper() {
  return (
    <div className="col-xl-6 col-lg-10 col-md-10 col-sm-10 Whitepaper mt-5 px-3 mx-auto">
      <h1 id="whitepaper">MeVerse Game Whitepaper</h1>
      <p className="lead">
        MeVerse is the game of risking, lending, and borrowing, where your goal
        is to fulfill the prophecy, collect karma&nbsp;
        <a href="#tokenomics">$MVK</a> and become <a href="#theone">The One</a>.
        10,000 members of MeVerse, called <a href="#meridians">Meridians</a>,
        generate daily karma based on their rarity. They use collected karma to
        improve themselves by buying <a href="#virtues">Virtues</a>, further
        increasing daily karma yield, and ultimately becoming ultra-rare
        Meridian, The One. A small percentage of Meridians are known as&nbsp;
        <a href="#founders">The Founders</a>, well-respected members of society
        that have unique benefits as a gratitude for their founding efforts.
      </p>
      <p className="lead">
        Meridians are guided by all-seeing God,&nbsp;
        <span className="fw-bold">Dhaka</span>. They can&nbsp;
        <span className="fw-bold">lend</span> some karma to Dhaka with an
        interest rate affected by Meridian rarity. Similarly, Meridians
        can&nbsp;
        <span className="fw-bold">borrow</span> karma from Dhaka and must repay
        their debt before maturity date with an interest rate affected by
        Meridian rarity. Rarer Meridians get better interest rates. When taking
        a loan, players must put their Meridian (NFT) as &nbsp;
        <span className="fw-bold">collateral</span>. If a debt is not repaid by
        the due date, Dhaka will seize fallen Meridian (player loses NFT) and
        put its soul to <span className="fw-bold">The Purgatory</span>.
      </p>
      <p className="lead">
        Every lost NFT from The Purgatory is transferred to that player when a
        player's Meridian becomes The One. The One will get a permanent increase
        in daily karma yield of 10%. Any Meridian can be chosen as The One only
        once. After that, a new cycle begins, where Meridians again collect
        karma, risk, and compete for the title of chosen The One.
      </p>
      <p className="lead">
        MeVerse is the first NFT-based game that introduces principles of
        lending, borrowing, and the possibility to put&nbsp;
        <span className="fw-bold">ERC-721</span> tokens as &nbsp;
        <span className="fw-bold">collateral</span>. This opens endless
        possibilities for players to earn&nbsp;
        <span className="fw-bold">ERC-20</span> tokens, called karma ($MVK). For
        example, players can borrow karma, hoping that the $MVK price will drop
        in the future. Effectively, MeVerse Game enables&nbsp;
        <span className="fw-bold">short and long positions</span> for its
        players. Long waited, completely innovative and fresh from the hands of
        the masterminds: MeVerse Game! Get to know all about our game and
        experience the magic of MeVerse.
      </p>
      <div className="row mx-auto w-75">
        <img src={itemsImage} alt="Ooops..." className="img-fluid" />
      </div>
      <h2 id="#tldr" className="mt-5">
        TLDR
      </h2>
      <ul className="lead List">
        <li>
          There are 10,000 Meridians minted for 0.07 ETH that generate daily
          karma $MVK
        </li>
        <li>
          User affects NFT rarity by selecting traits during Era of Creation
          (Minting)
        </li>
        <li>
          A small percentage of Meridians will be minted as Founders with
          additional benefits
        </li>
        <li>
          Meridians can buy Virtues for $MVK to increase daily karma yield
        </li>
        <li>
          Meridians can lend or borrow karma $MVK to/from MeVerse deity Dhaka
        </li>
        <li>
          Meridians that failed to pay a debt to Dhaka will be sent to The
          Purgatory
        </li>
        <li>Meridians can enter the competition to become The One</li>
        <li>
          The One gets permanent increase in daily karma yield and collects all
          NFTs from The Purgatory
        </li>
        <li>
          The One collects all Meridians from The Purgatory and gets a permanent
          increase in daily karma yield
        </li>
        <li>
          A novel NFT + DeFi protocol is introduced where NFTs can be used as a
          collateral
        </li>
      </ul>

      <h2 id="meridians" className="mt-5">
        Meridians
      </h2>
      <p className="lead">
        They are inhabitants of MeVerse with the ability to generate daily karma
        ($MVK). Only 10,000 Meridians will ever exist. Meridians are created
        during the minting process for a price of&nbsp;
        <span className="fw-bold">0.07 ETH</span> (price may be adjusted,
        depending on the current USD to ETH rate). For the first time ever in
        the NFT world, you will have the ability to select Meridian (NFT)
        traits: personality traits and cosmetic items. This means that&nbsp;
        <span className="fw-bold">
          NFT rarity is not random but it is solely affected by players during
          minting!
        </span>
        &nbsp;Regular Meridians are minted with 95% chance. In the remaining 5%,
        special Meridians, called The Founders are minted.
      </p>
      <div className="row px-5 table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-blue fs-4 Game-font">Join</td>
              <td>
                Join MeVerse and yield 100 karma ($MVK) / day (prorated to the
                second).
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Leave</td>
              <td>
                Leave MeVerse and stop karma generation. Players must join
                MeVerse again to resume karma generation. No other actions can
                be performed.
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Collect Karma</td>
              <td>
                Collect accumulated karma (transfer to player's wallet). 90% of
                accumulated karma goes to the player. The remaining 10% is
                distributed to The Founders for their founding efforts. Each
                Founder gets its share proportional to its rarity.
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Lend Karma</td>
              <td>
                Lend karma to Dhaka with a compound interest rate from 1% to 2%,
                depending on Meridian rarity. Rarer Meridians get higher
                (better) interest rates. Interest rate compounds daily! The
                compounding period is limited to 30 days. Meridian can have only
                one active loan. Maximum 3,000 karma can be lent at once.
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Withdraw Karma</td>
              <td>
                Withdraw lent karma and collect interest. Players may loan karma
                again as there can be only one active loan.
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Borrow Karma</td>
              <td>
                Borrow some karma from Dhaka with the agreement that debt will
                be repaid by a specific date, with a compound interest rate from
                2.5% to 3.5%, depending on Meridian rarity. Rarer Meridians have
                lower (better) interest rates. You can use borrowed karma to buy
                Virtues that further increase daily karma yield, or sold on open
                markets, or used to increase chances of becoming The One.
                Meridian can have only one active credit. Maximum 3,000 karma
                can be borrowed at once. Interest rate compounds daily. When
                players borrow karma, their Meridian (NFT) is used as
                collateral.
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Return Karma</td>
              <td>
                Return borrowed karma and pay accumulated interest. If the
                player fails to repay the debt in 10 days, Dhaka seizes the
                collateral and puts fallen Meridian on The Purgatory until The
                One is chosen.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 id="founders" className="mt-5">
        Founders
      </h2>
      <p className="lead">
        The Founders are extraordinary Meridians who built most of the MeVerse.
        They are awarded for their founding efforts in the following ways
      </p>
      <ul className="lead List">
        <li>
          Daily karma yield is increased by 20%, from 100 to 120 $MVK / day
        </li>
        <li>
          10% of collected karma by regular Meridians is distributed among
          Founders, proportional to their rarity
        </li>
      </ul>
      <div className="row mx-auto w-50">
        <img src={sketchImage} alt="Ooops..." className="img-fluid" />
      </div>
      <h2 id="virtues" className="mt-5">
        Virtues
      </h2>
      <p className="lead">
        Virtues are just unique tokens that increase Meridian's daily karma
        yield. Players use karma ($MVK) to buy virtues. Virtues would be
        available on the secondary markets. There are three tiers of virtues,
        each one more powerful and more expensive than the previous.
      </p>
      <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 table-responsive mx-auto">
        <table className="table">
          <thead className="text-blue fs-4 Game-font">
            <td className="text-left">Token ID</td>
            <td className="text-center">Cost $MVK</td>
            <td className="text-center">$MVK Yield (%)</td>
          </thead>
          <tbody>
            <tr>
              <td>1 to 10,000</td>
              <td className="text-center">500</td>
              <td className="text-center">0.5</td>
            </tr>
            <tr>
              <td>10,001 to 20,000</td>
              <td className="text-center">1,000</td>
              <td className="text-center">1.0</td>
            </tr>
            <tr>
              <td>20,001 to 30,000</td>
              <td className="text-center">1,500</td>
              <td className="text-center">1.5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="lead">
        Multiple virtues can be used to increase karma yield.
      </p>
      <div className="col-10 table-responsive mx-auto">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-blue fs-4 Game-font">Activate</td>
              <td>
                Activate selected virtue and increase daily karma yield by
                specified percentage.
              </td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Deactivate</td>
              <td>
                Deactivate selected virtue and remove daily karma yield
                increase.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 id="theone" className="mt-5">
        The One
      </h2>
      <p className="lead">
        Every 42 days, one Meridian, with the most karma, is chosen as The One.
        A fee of 3,000 $MVK must be paid to participate in the
        competition.&nbsp;
        <span className="fw-bold text-orange">
          The One receives all lost Meridians (NFTs) from The Purgatory
        </span>
        &nbsp;and gets&nbsp;
        <span className="fw-bold">
          a permanent increase in daily karma yield by 10%
        </span>
        . Every Meridian can be chosen as The One, only once. But if players
        hold multiple Meridians, each of them can become The One. When the
        ceremony is finished, a new cycle begins, and Meridians once again
        compete for the title of The One.
      </p>
      <div className="row mx-auto w-75">
        <img src={theOneImage} alt="Ooops..." className="img-fluid" />
      </div>
      <h2 id="tokenomics" className="mt-5">
        Tokenomics
      </h2>
      <p className="lead">
        The MeVerse game token based on ERC-20 protocol is called karma ($MVK)
        with a maximum supply of 1,000,000,000 tokens.
      </p>
      <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 table-responsive mx-auto">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-blue fs-4 Game-font w-50">Ticker</td>
              <td>$MVK</td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Maximum Supply</td>
              <td>1,000,000,000</td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Decimals</td>
              <td>18</td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Dhaka</td>
              <td>10%</td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Developers</td>
              <td>5%</td>
            </tr>
            <tr>
              <td className="text-blue fs-4 Game-font">Emergency Funds *</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-small">
        * Every transaction made in the emergency fund will be transparent to
        the community.
      </p>
      <p className="lead">
        10% of royalties from the secondary markets will be used for the
        liquidity pool.
      </p>
      <h2 id="rarity" className="mt-5">
        Rarity
      </h2>
      <p className="lead">
        For the first time ever in the Metaverse, users can choose NFT traits
        and affect rarity. This means that all benefits that rare Meridians get
        are in the hands of players. During Era of Creation (Minting), players
        will select personality traits and items for their Meridians. Note that
        we must preserve the uniqueness of minted NFTs. This means if two users
        try to mint the same Meridian, the faster user (who submitted the
        request earlier) will win. Other users will get Meridian with some items
        replaced to preserve uniqueness.
      </p>
      <div className="row mx-auto w-75">
        <img src={personalityImage} alt="Ooops..." className="img-fluid" />
      </div>
    </div>
  );
}

export default Whitepaper;
