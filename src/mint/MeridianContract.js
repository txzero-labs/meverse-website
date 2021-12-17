import Web3 from "web3";
import Contract from "web3-eth-contract";
import meridianContract from "./contracts/meridian.sol/Meridian.json";

// MetaMask is supported web3 provider.
Contract.setProvider(Web3.givenProvider);

class MeridianContract {
  constructor() {
    this.contract = new Contract(
      meridianContract.abi,
      process.env.REACT_APP_CONTRACT_ADDRESS
    );
  }

  async availableTokens() {
    return await this.contract.methods.availableTokens().call();
  }

  async isPreSaleActive() {
    return await this.contract.methods.preSaleActive().call();
  }

  async preSaleCost() {
    return await this.contract.methods.preSaleCost().call();
  }

  async cost() {
    return await this.contract.methods.cost().call();
  }

  async mint({ senderAddress, encodedTraits }) {
    const preSaleActive = await this.isPreSaleActive();
    const cost = await (preSaleActive ? this.preSaleCost() : this.cost());

    return await this.contract.methods.mint(parseInt(encodedTraits, 2)).send({
      from: senderAddress,
      value: cost,
      gas: 350000,
      gasPrice: "70000000000",
    });
  }

  async remainingTokens(address) {
    const preSaleActive = await this.isPreSaleActive();
    const max = await (preSaleActive
      ? this.maxPreSaleTokens()
      : this.maxTokensPerWallet());
    const currentTokenBalance = await this.tokenBalance(address);
    return max - currentTokenBalance;
  }

  async maxPreSaleTokens() {
    return await this.contract.methods.preSaleMaxTokens().call();
  }

  async maxTokensPerWallet() {
    return await this.contract.methods.maxTokensPerWallet().call();
  }

  async tokenBalance(address) {
    return await this.contract.methods.balanceOf(address).call();
  }
}

export default MeridianContract;
