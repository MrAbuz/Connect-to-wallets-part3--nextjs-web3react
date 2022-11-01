3rd way to connect our smart contracts to Metamask: Using next.js + web3-react.

Web3-react is a package that will make it easier to connect to our wallets. Used by uniswap/aave!
Created by Noah Zinsmeister, from Uniswap.

Following from "https://www.youtube.com/watch?v=pdsYCkUWrgQ"

To try this repo:

```
git clone https://github.com/MrAbuz/connect-to-wallets-part3--nextjs-web3react
yarn
```

To open the project on a browser tab:

```
yarn dev
then click the url it provides (it opens a tab)
```

Then open a new terminal (a 2nd terminal), and:

```
cd ..
git clone https://github.com/MrAbuz/connect-to-wallets-part0--just-to-get-hardhat-sol-code
yarn
yarn hardhat node
```

Copy the rpc url provided in the hardhat node that you created, then go to your metamask, add a new network, and create a new network with that copied rpc url and chainid: 31337.
Then pick one private key from the ones provided in hardhat node and import it to your metamask.

With all of this you will be able to test this repo! have fun :)
