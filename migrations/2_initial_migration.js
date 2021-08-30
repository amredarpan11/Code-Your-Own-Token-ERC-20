var BkToken = artifacts.require("./BkToken.sol");
var BkTokenSale = artifacts.require("./BkTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(BkToken, 1000000).then(function(){
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BkTokenSale, BkToken.address, tokenPrice);
  });
};