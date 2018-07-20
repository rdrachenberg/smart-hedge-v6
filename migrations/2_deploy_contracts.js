const BasicToken = artifacts.require("./BasicToken.sol");
// const TokenSale = artifacts.require("./TokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(BasicToken);
  // deployer.deploy(TokenSale);
};
