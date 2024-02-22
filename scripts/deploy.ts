import { ethers } from "hardhat";

async function main() {
  // const Token = await ethers.getContractFactory("CVIII");
  // const token = await Token.deploy("web3Bridge", "VIII");
  // await token.deployed();
  const OnChainNFT  = await ethers.deployContract("OnChainNFT"); 
  await OnChainNFT .waitForDeployment();
  
  console.log(
    `OnChainNFT  contract deployed to ${OnChainNFT .target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
