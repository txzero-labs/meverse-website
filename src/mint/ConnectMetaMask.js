import logo from "../images/logo.png";
import "./ConnectMetaMask.scss";

function ConnectMetaMask({ setWalletAddress }) {
  const isMetMaskAvailable = !!window.ethereum && window.ethereum.isMetaMask;

  return (
    <div className="col d-flex flex-column justify-content-evenly h-100 ConnectMetaMask">
      <div className="row mx-auto">
        <img src={logo} className="img-fluid" alt="Ooops" height="350" />
      </div>
      <div className="row mx-auto w-50">
        {isMetMaskAvailable ? (
          <h1 className="display-2 text-center">
            Connect MetaMask Account to mint Meridians
          </h1>
        ) : (
          <h1 className="display-2 text-center">
            <a href="https://metamask.io/" className="MetaMaskLink">
              MetaMask
            </a>
            &nbsp;account is required to mint Meridians
          </h1>
        )}
      </div>
      <div className="row mx-auto">
        {isMetMaskAvailable ? (
          <button
            className="ConnectMetaMaskButton fs-1"
            onClick={async () => {
              const [walletAddress] = await await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              setWalletAddress(walletAddress);
            }}
          >
            <i className="bi bi-wallet2">&nbsp;Connect&nbsp;</i>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ConnectMetaMask;
