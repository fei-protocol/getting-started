# Build a yield strategy with Tribe Turbo and ERC-4626
Tutorial on creating a yield generating strategy using the Tribe DAO's Turbo and ERC-4626 products.
## Getting started
1. Git clone this repo: `git clone https://github.com/fei-protocol/getting-started.git`
2. Install dependencies: `npm install`
3. Run tests: `npm run test`

## Definition
### ERC-4626
A new standard for Tokenized vaults. It represents a strategy which is itself also tokenised
### Turbo
A standard wrapper, called a Safe, around a collaterised Fuse lending position. 

Users create a Safe and then borrow Fei. The borrowed Fei is costless, 0% APR, and that borrowed Fei is programmatically placed into an ERC-4626 strategy.

## Flywheel V2

## How this works
This tutorial takes you through the end to end flow of:
1. Creating an ERC-4626 strategy 
2. Creating a Turbo Safe 

The tutorial forks makes use of Hardhat, Typescript and forks mainnet, so we can deploy and test against Fuse.

