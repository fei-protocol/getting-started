import { expect } from "chai";
import { ethers } from "hardhat";
import { TURBO_ADMIN_ADDRESS } from './config';
import { getImpersonatedSigner } from "./utils";

// Could I just do this with git submodules?
// Probably, don't really expect people to modify source code. 


// Need the contracts now

describe("Yield generating strategies with Turbo", function () {
  before(async () => {
    // Setup mainnet state/contracts that will need
  });
  it("should create ERC-4626 strategy", async () => {
    const stratName = "dummy";
    const stratSymbol = "D";
    const fusePoolMarket = "0x1234";

    const FuseERC4626Factory = await ethers.getContractFactory("FuseERC4626");
    const erc4626Stategy = await FuseERC4626Factory.deploy(
      fusePoolMarket,
      stratName,
      stratSymbol
    );
    await erc4626Stategy.deployed();

    // Validate strategy created as expected
    expect(await erc4626Stategy.name()).to.equal(stratName);
    expect(await erc4626Stategy.symbol()).to.equal(stratSymbol);
  });

  it("should create a Turbo safe with strategy", async () => {
    // Impersonate Turbo Admin to create a new safe (Safe creation is permissioned)
    const turboSigner = await getImpersonatedSigner(TURBO_ADMIN_ADDRESS);

    // Need Master to create a safe
  });

  it("should deposit collateral into Turb oSafe", async () => {});

  it("should boost Turbo Safe and place funds into strategy to earn yield", async () => {});
});
