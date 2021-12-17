import { useState } from "react";
import MintingPage from "./MintingPage";
import ConnectMetaMask from "./ConnectMetaMask";
import "./MintApp.scss";

function MintApp() {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <div className="container-fluid MintApp h-100 vh-100">
      {walletAddress !== null ? (
        <MintingPage walletAddress={walletAddress} />
      ) : (
        <ConnectMetaMask setWalletAddress={setWalletAddress} />
      )}
    </div>
  );
}

export default MintApp;
