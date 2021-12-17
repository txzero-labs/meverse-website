import React from "react";
import mergeImages from "merge-images";
import MeridianContract from "./MeridianContract";
import adventurer from "../images/leaders/mimi.png";
import chad from "../images/leaders/daka.png";
import commander from "../images/leaders/greesin.png";
import defender from "../images/leaders/djape.png";
import thinker from "../images/leaders/anya.png";
import "./MintingPage.scss";

const DEFAULT_HAND_ITEM = 28;
const DEFAULT_ACCESSORY_ITEM = 9;

const layerImages = require.context("../images/layers", true);
const contract = new MeridianContract();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class MintingPage extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      group: null,
      head: null,
      chest: null,
      legs: null,
      boots: null,
      hand: DEFAULT_HAND_ITEM,
      accessory: DEFAULT_ACCESSORY_ITEM,
      background: null,
      rightHandItemId: null,
      faceId: 0,
      poseId: 0,
      step: 0,
      waiting: false,
      layers: {
        base: layerImages("./base.png").default,
      },
      remainingTokens: null,
      metadata: null,
    };

    this.state = this.initialState;
  }

  async handleMint() {
    const {
      group,
      head,
      chest,
      legs,
      boots,
      hand,
      accessory,
      background,
      rightHandItemId,
      faceId,
      poseId,
    } = this.state;
    const body = {
      group,
      faceId,
      poseId,
      rightHandItemId,
      items: {
        head,
        chest,
        legs,
        boots,
        hand,
        accessory,
        background,
      },
      wallet: this.props.walletAddress,
    };

    this.setState({ waiting: true });

    try {
      const encodedTraits = await this.generateAsset(body);
      console.log(encodedTraits);
      // await this.mint(encodedTraits);
      // const { metadataHash } = await this.uploadMetadata(encodedTraits);
      // const metadata = await this.getAssetMetadata(metadataHash);
      // const remainingTokens = await contract.remainingTokens(
      //   this.props.walletAddress
      // );
      // this.setState({ metadata, remainingTokens });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ waiting: false });
    }
  }

  async generateAsset(body) {
    const url = `${process.env.REACT_APP_API_URL}/generate`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const payload = await response.json();

    if (!response.ok) {
      if (response.status >= 400 && response.status <= 500) {
        throw new Error(payload.message);
      } else {
        throw new Error("Ooops! Mint request failed. Please try again.");
      }
    }

    return payload.traits;
  }

  async mint(encodedTraits) {
    var success = false;
    try {
      const receipt = await contract.mint({
        senderAddress: this.props.walletAddress,
        encodedTraits,
      });
      success = receipt.status;
    } catch (error) {
      throw new Error("Oops! Failed to process transaction.");
    }
    if (!success) {
      throw new Error("Ooops! Transaction reverted by smart contract.");
    }
  }

  async uploadMetadata(encodedTraits) {
    const { head, chest, legs, boots, hand, accessory, background } =
      this.state;

    const url = `${process.env.REACT_APP_API_URL}/upload`;
    const body = {
      imageName: `meridians/${encodedTraits}.png`,
      walletAddress: this.props.walletAddress,
      traits: {
        group: this.groupId(),
        head,
        chest,
        legs,
        boots,
        hand,
        accessory,
        background,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const payload = await response.json();

    if (!response.ok) {
      if (response.status >= 400 && response.status <= 500) {
        throw new Error(payload.message);
      } else {
        throw new Error("Ooops! Metadata upload failed.");
      }
    }

    return payload;
  }

  async getAssetMetadata(hash) {
    return await fetch(`https://ipfs.io/ipfs/${hash}`).then((response) =>
      response.json()
    );
  }

  groupId() {
    const { group } = this.state;
    return {
      adventurer: 0,
      chad: 1,
      commander: 2,
      defender: 3,
      thinker: 4,
    }[group];
  }

  isMintDisabled() {
    const { head, chest, legs, boots, background } = this.state;

    return (
      head === null ||
      chest === null ||
      legs === null ||
      boots === null ||
      background === null
    );
  }

  render() {
    return this.state.metadata === null
      ? this.renderMintingForm()
      : this.renderMintedAsset();
  }

  renderMintingForm() {
    return (
      <div className="container w-75 h-100 MintingForm mt-3">
        {this.renderTitle()}
        {this.state.step === 0
          ? this.renderLeaderForm()
          : this.renderItemSelectionForm()}
      </div>
    );
  }

  renderTitle() {
    return (
      <h1 className="text-center MintingFormTitle">
        {this.state.step + 1}/2 Choose your&nbsp;
        {this.state.step === 0 ? (
          <span className="text-orange">leader</span>
        ) : (
          <span className="text-blue">items</span>
        )}
      </h1>
    );
  }
  renderLeaderForm() {
    return (
      <div className="row w-5 h-50 mx-auto mt-3">
        <div className="col text-center py-0 my-0">
          {this.renderLeader({ avatar: adventurer, group: "adventurer" })}
        </div>
        <div className="col text-center py-0 my-0">
          {this.renderLeader({ avatar: chad, group: "chad" })}
        </div>
        <div className="w-100"></div>
        <div className="col text-center py-0 my-0 ">
          {this.renderLeader({ avatar: commander, group: "commander" })}
        </div>
        <div className="w-100"></div>
        <div className="col text-center py-0 my-0">
          {this.renderLeader({ avatar: defender, group: "defender" })}
        </div>
        <div className="col text-center py-0 my-0">
          {this.renderLeader({ avatar: thinker, group: "thinker" })}
        </div>
      </div>
    );
  }

  renderLeader({ avatar, group }) {
    let paddingRight;
    switch (group) {
      case "adventurer":
        paddingRight = 20;
        break;
      case "chad":
        paddingRight = 40;
        break;
      case "commander":
        paddingRight = 30;
        break;
      default:
        paddingRight = 0;
    }
    return (
      <div className="col Leader">
        <img
          src={avatar}
          className=""
          alt="Ooops..."
          height="230"
          width="230"
          onClick={() => {
            const faceId = randomInt(0, 1);
            const face = layerImages(`./faces/${group}/${faceId}.png`).default;

            this.setState({
              step: 1,
              group,
              faceId,
              layers: {
                ...this.state.layers,
                face,
              },
            });
          }}
        />
        <p className="LeaderTitle" style={{ paddingRight }}>
          {group}
        </p>
      </div>
    );
  }

  renderItemSelectionForm() {
    mergeImages(this.getSelectedLayers()).then(
      (b64) => (document.getElementById("meridian").src = b64)
    );

    const isMintDisabled = this.isMintDisabled() || this.state.waiting;

    return (
      <div className="col d-flex flex-column">
        <div className="col mx-auto">
          <img
            id="meridian"
            src={this.state.layers.base}
            className="img-fluid rounded-3 shadow-lg"
            alt=""
            height="350"
            width="350"
          />
        </div>
        <div className="row mt-2">
          <div className="col">
            {this.renderBackgroundSelect()}
            {this.renderHeadSelect()}
            {this.renderChestSelect()}
            {this.renderLegsSelect()}
            {this.renderBootsSelect()}
            {this.renderHandItemSelect()}
            {this.renderAccessorySelect()}
            <div className="col d-flex flex-column mt-2">
              <div className="row mx-auto">
                <button
                  className={`MintButton ${isMintDisabled ? "disabled" : ""}`}
                  aria-disabled={isMintDisabled}
                  onClick={this.handleMint.bind(this)}
                >
                  {this.state.waiting ? (
                    <div className="d-flex align-items-center">
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      &nbsp;&nbsp;Minting...
                    </div>
                  ) : (
                    "Mint"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBackgroundSelect() {
    return (
      <div className="mx-auto row form-floating SelectionForm">
        <select
          id="background-select"
          className="form-select"
          aria-label="Select background"
          defaultValue="-"
          onChange={(event) => {
            const value = event.target.value;
            if (value !== "-") {
              this.setBackground(value);
            }
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="0">Black</option>
          <option value="1">Blue</option>
          <option value="2">Brown</option>
          <option value="3">Gold</option>
          <option value="4">Green</option>
          <option value="5">Orange</option>
          <option value="6">Pink</option>
          <option value="7">Purple</option>
          <option value="8">Red</option>
          <option value="9">Silver</option>
          <option value="10">White</option>
        </select>
        <label htmlFor="background-select">
          Background <span className="text-orange">*</span>
        </label>
      </div>
    );
  }

  renderHeadSelect() {
    return (
      <div className="mx-auto row form-floating mt-1 SelectionForm">
        <select
          id="head-select"
          className="form-select"
          aria-label="Select head"
          defaultValue="-"
          onChange={(event) => {
            const value = event.target.value;
            if (value !== "-") {
              this.setHead(value);
            }
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="0">Brown Hair</option>
          <option value="1">Afro</option>
          <option value="2">Short Crop</option>
          <option value="3">Medium Pompadour</option>
          <option value="4">Curly</option>
          <option value="5">Bald</option>
          <option value="6">Red Mohawk</option>
          <option value="7">Medium Crop</option>
          <option value="8">Short Pompadour</option>
          <option value="9">Buzz Cut</option>
          <option value="10">Long Spiky</option>
          <option value="11">Short Spiky</option>
          <option value="12">Long Hair</option>
          <option value="13">Doofus</option>
          <option value="14">Mr Burns</option>
          <option value="15">Silver Emo</option>
          <option value="16">Curly Top</option>
          <option value="17">Fade</option>
          <option value="18">Pigtails</option>
          <option value="19">Mobster</option>
          <option value="20">Blonde Mobster</option>
          <option value="21">Samurai</option>
          <option value="22">Short Fade</option>
          <option value="23">Santa Hat</option>
          <option value="24">Crown</option>
          <option value="25">Afro Comb</option>
          <option value="26">Gray Cap</option>
          <option value="27">Football Helmet</option>
          <option value="28">Soldier Helmet</option>
          <option value="29">Magician Hat</option>
          <option value="30">Sweatband</option>
          <option value="31">White Cap</option>
          <option value="32">Propeller Cap</option>
          <option value="33">Bear Cap</option>
          <option value="34">Police Hat</option>
          <option value="35">Beanie</option>
          <option value="36">Winter Cap</option>
          <option value="37">Elf Hat</option>
          <option value="38">Bamboo Hat</option>
        </select>
        <label htmlFor="head-select">
          Head <span className="text-orange">*</span>
        </label>
      </div>
    );
  }

  renderChestSelect() {
    return (
      <div className="mx-auto row form-floating mt-1 SelectionForm">
        <select
          id="chest-select"
          className="form-select"
          aria-label="Select chest"
          defaultValue="-"
          onChange={(event) => {
            const value = event.target.value;
            if (value !== "-") {
              this.setChest(value);
            }
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="0">American Football</option>
          <option value="1">Army</option>
          <option value="2">Elf Suit</option>
          <option value="3">Jacket</option>
          <option value="4">Kimono White</option>
          <option value="5">Kimono Black</option>
          <option value="6">Kimono Red</option>
          <option value="7">Matrix</option>
          <option value="8">Police</option>
          <option value="9">Polo Black</option>
          <option value="10">Polo Silver</option>
          <option value="11">Punisher</option>
          <option value="12">Silver Shirt</option>
          <option value="13">Suit</option>
          <option value="14">Sweatshirt</option>
          <option value="15">Palm T-Shirt</option>
          <option value="16">Sweater</option>
          <option value="17">Red West</option>
          <option value="18">White Shirt</option>
        </select>
        <label htmlFor="chest-select">
          Chest <span className="text-orange">*</span>
        </label>
      </div>
    );
  }

  renderLegsSelect() {
    return (
      <div className="mx-auto row form-floating mt-1 SelectionForm">
        <select
          id="legs-select"
          className="form-select"
          aria-label="Select legs"
          defaultValue="-"
          onChange={(event) => {
            this.setLegs(event.target.value);
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="0">Navy Blue Pants</option>
          <option value="1">Yellow Pants</option>
          <option value="2">Turquoise Pants</option>
          <option value="3">Peach Pants</option>
          <option value="4">Grey Pants</option>
          <option value="5">Kimono</option>
          <option value="6">Jeans</option>
          <option value="7">Army Pants</option>
          <option value="8">Pajamas Heart</option>
          <option value="9">Pajamas Star</option>
          <option value="10">Pink Skirt</option>
          <option value="11">Turquoise Stars</option>
          <option value="12">Leather Skirt</option>
          <option value="13">Polka</option>
          <option value="14">Kilt</option>
        </select>
        <label htmlFor="legs-select">
          Legs <span className="text-orange">*</span>
        </label>
      </div>
    );
  }

  renderBootsSelect() {
    return (
      <div className="mx-auto row form-floating mt-1 SelectionForm">
        <select
          id="boots-select"
          className="form-select"
          aria-label="Select boots"
          defaultValue="-"
          onChange={(event) => {
            const value = event.target.value;
            if (value !== "-") {
              this.setBoots(event.target.value);
            }
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="0">Air Sneakers</option>
          <option value="1">Red Boots</option>
          <option value="2">Black-White Sneakers</option>
          <option value="3">Caligae</option>
          <option value="4">Just Boots</option>
          <option value="5">Elegant Shoes</option>
          <option value="6">White-Red Boots</option>
          <option value="7">Flip Flops</option>
          <option value="8">Black Stripes</option>
          <option value="9">Red All Stars</option>
          <option value="10">MeVerse Sneakers</option>
          <option value="11">Black Boots</option>
          <option value="12">Home Shoes</option>
          <option value="13">Blue Shoes</option>
          <option value="14">Cleats</option>
        </select>
        <label htmlFor="boots-select">
          Boots <span className="text-orange">*</span>
        </label>
      </div>
    );
  }

  renderHandItemSelect() {
    return (
      <div className="mx-auto row form-floating mt-1 SelectionForm">
        <select
          disabled={this.state.chest === null}
          id="hand-item-select"
          className="form-select"
          aria-label="Select hand item"
          defaultValue="-"
          onChange={(event) => {
            const value = event.target.value;
            if (value !== "-") {
              this.setHandItem(event.target.value);
            }
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="28">None</option>
          <option value="0">Magic Wand</option>
          <option value="1">Umbrella</option>
          <option value="2">Baseball Bat</option>
          <option value="3">Purse</option>
          <option value="4">Money</option>
          <option value="5">Chocolate</option>
          <option value="6">Newspaper</option>
          <option value="7">Mail</option>
          <option value="8">Taser</option>
          <option value="9">Brown Watch</option>
          <option value="10">Black Watch</option>
          <option value="11">Anchor</option>
          <option value="12">Skull</option>
          <option value="13">Arrows</option>
          <option value="14">Diamond</option>
          <option value="15">Crown</option>
          <option value="16">Heart</option>
          <option value="17">Poker Cards</option>
          <option value="18">Star</option>
          <option value="19">Magic Dust</option>
          <option value="20">Tear Tattoo</option>
          <option value="21">Dragon</option>
          <option value="22">Eye</option>
          <option value="23">Fire</option>
          <option value="24">BTC</option>
          <option value="25">ETH</option>
          <option value="26">Suitcase</option>
          <option value="27">Morning Star</option>
        </select>
        <label htmlFor="hand-item-select">Hand</label>
      </div>
    );
  }

  renderAccessorySelect() {
    const { group, poseId } = this.state;

    return (
      <div className="mx-auto row form-floating mt-1 SelectionForm">
        <select
          disabled={this.state.chest === null}
          id="accessory-select"
          className="form-select"
          aria-label="Select accessory"
          defaultValue="-"
          onChange={(event) => {
            const value = event.target.value;
            if (value !== "-") {
              this.setAccessory(value);
            }
          }}
        >
          <option value="-" hidden>
            Choose
          </option>
          <option value="9">None</option>
          <option value="0" hidden={group === "thinker" && poseId === 1}>
            MeVerse Chain
          </option>
          <option value="1" hidden={group === "thinker" && poseId === 1}>
            Punisher Chain
          </option>
          <option value="2" hidden={group === "thinker" && poseId === 1}>
            Gold Chain
          </option>
          <option value="3" hidden={group === "thinker" && poseId === 1}>
            Red Bandana
          </option>
          <option value="4" hidden={group === "thinker" && poseId === 1}>
            Black Bandana
          </option>
          <option value="5">Gold Shades</option>
          <option value="6">Glasses</option>
          <option value="7">Black Glasses</option>
          <option value="8">Black Shades</option>
        </select>
        <label htmlFor="accessory-select">Accessory</label>
      </div>
    );
  }

  setBackground(itemId) {
    this.setState({
      background: parseInt(itemId),
      layers: {
        ...this.state.layers,
        background: layerImages(`./backgrounds/${itemId}.png`).default,
      },
    });
  }

  setHead(itemId) {
    this.setState({
      head: parseInt(itemId),
      layers: {
        ...this.state.layers,
        head: layerImages(`./heads/${itemId}.png`).default,
      },
    });
  }

  setChest(chestItemId) {
    const poseId = randomInt(0, 2);
    const chestItemPath =
      poseId === 2 ? "universal/0.png" : `${this.state.group}/${poseId}.png`;
    const { itemId: rightHandItemId, path: rightHandItemPath } =
      this.getRightHandItem(poseId);

    this.setState({
      poseId,
      rightHandItemId,
      chest: parseInt(chestItemId),
      layers: {
        ...this.state.layers,
        chest: layerImages(`./chests/${chestItemId}/${chestItemPath}`).default,
        rightHandItem: !!rightHandItemPath
          ? layerImages(`./${rightHandItemPath}`).default
          : null,
      },
    });
  }

  getRightHandItem(poseId) {
    const { group } = this.state;

    var itemId = null;
    var path = null;

    if (group === "adventurer") {
      const { itemId: _itemId, path: _path } = this.getRightHandItemWithPose({
        poseId,
        maxPoseItemId: 3,
        maxUniversalItemId: 1,
      });
      itemId = _itemId;
      path = _path;
    }

    if (group === "defender") {
      const { itemId: _itemId, path: _path } = this.getRightHandItemWithPose({
        poseId,
        maxPoseItemId: 6,
        maxUniversalItemId: 3,
      });
      itemId = _itemId;
      path = _path;
    }

    if ((group === "chad" || group === "commander") && poseId === 2) {
      itemId = randomInt(0, 4);
      path = `universal/${itemId}.png`;
    }

    if (group === "thinker" && poseId === 2) {
      itemId = randomInt(0, 3);
      path = `universal/${itemId}.png`;
    }

    if (!!path) {
      path = `rhands/${group}/${path}`;
    }

    return { itemId, path };
  }

  getRightHandItemWithPose({ poseId, maxPoseItemId, maxUniversalItemId }) {
    var itemId;
    var path;

    if (poseId === 1) {
      itemId = randomInt(0, maxPoseItemId);
      path = `1/${itemId}.png`;
    } else if (poseId === 2) {
      itemId = randomInt(0, maxUniversalItemId);
      path = `universal/${itemId}.png`;
    }

    return { itemId, path };
  }

  setLegs(itemId) {
    this.setState({
      legs: parseInt(itemId),
      layers: {
        ...this.state.layers,
        legs: layerImages(`./legs/${itemId}.png`).default,
      },
    });
  }

  setBoots(itemId) {
    this.setState({
      boots: parseInt(itemId),
      layers: {
        ...this.state.layers,
        boots: layerImages(`./boots/${itemId}.png`).default,
      },
    });
  }

  setHandItem(itemId) {
    const hand = parseInt(itemId);
    this.setState({
      hand,
      layers: {
        ...this.state.layers,
        hand: hand < 28 ? layerImages(`./lhands/${itemId}.png`).default : null,
      },
    });
  }

  setAccessory(itemId) {
    const accessory = parseInt(itemId);
    this.setState({
      accessory,
      layers: {
        ...this.state.layers,
        accessory:
          accessory < 9
            ? layerImages(`./accessories/${itemId}.png`).default
            : null,
      },
    });
  }

  getSelectedLayers() {
    return [
      this.state.layers.background,
      this.state.layers.base,
      this.state.layers.face,
      this.state.layers.boots,
      this.state.layers.legs,
      this.state.layers.chest,
      this.state.layers.head,
      this.state.layers.accessory,
      this.state.layers.hand,
      this.state.layers.rightHandItem,
    ].filter((layer) => !!layer);
  }

  renderMintedAsset() {
    const { metadata, remainingTokens } = this.state;
    const canMintAgain = remainingTokens !== null && remainingTokens > 0;

    return metadata === null ? (
      <div className="spinner"></div>
    ) : (
      <div className="container h-100 PostMintPage">
        <h1 className="display-1 text-center mt-5">
          Congratulations<span className="text-blue">!</span>
        </h1>
        <div className="row mx-auto w-75 mt-5">
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={metadata.image}
              alt="Ooops..."
              className="img-fluid rounded-3 shadow"
            />
            <h2 className="game-font mt-3">{metadata.name}</h2>
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column">
            {this.renderAttributes(metadata.attributes)}
          </div>
        </div>
        <div className="col mt-5 text-center">
          {canMintAgain ? (
            <div>
              <p className="display-3 game-font">
                You can mint&nbsp;
                <span className="text-orange">{remainingTokens}</span> more
                Meridian{remainingTokens === 1 ? "" : "s"}!!!
              </p>
              <button
                className="MintButton fs-2 px-3"
                onClick={this.resetState.bind(this)}
              >
                Mint Again
              </button>
            </div>
          ) : (
            <p className="display-3 game-font">
              You minted max number of Meridians during presale!
            </p>
          )}
        </div>
      </div>
    );
  }

  renderAttributes(attributes) {
    return (
      <table className="table table-sm mt-0">
        <tbody>
          {attributes.map((attribute, key) => (
            <tr key={key}>
              <td className="text-blue game-font fs-5">
                {attribute.trait_type}
              </td>
              <td>{attribute.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  resetState() {
    this.setState(this.initialState);
  }
}

export default MintingPage;
