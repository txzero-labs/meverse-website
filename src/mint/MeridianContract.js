import Web3 from "web3";
import Contract from "web3-eth-contract";
import meridianContract from "./contracts/meridian.sol/Meridian.json";

// MetaMask is supported web3 provider.
Contract.setProvider(Web3.givenProvider);

const web3 = new Web3(Web3.givenProvider);

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
    const freeMint = await this.isFreeMintAddress(senderAddress);
    const gasPrice = await this.estimatedGasPrice();
    const traits = parseInt(encodedTraits, 2);

    if (freeMint) {
      return await this.contract.methods
        .freeMint(traits)
        .send({ from: senderAddress, gas: 350000, gasPrice });
    } else {
      const preSaleActive = await this.isPreSaleActive();
      const cost = await (preSaleActive ? this.preSaleCost() : this.cost());

      return await this.contract.methods.mint(traits).send({
        from: senderAddress,
        value: cost,
        gas: 350000,
        gasPrice,
      });
    }
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

  async isFreeMintAddress(address) {
    return !!(await this.contract.methods.freeMintAddr(address).call());
  }

  async estimatedGasPrice() {
    return await web3.eth.getGasPrice();
  }
}

export default MeridianContract;
