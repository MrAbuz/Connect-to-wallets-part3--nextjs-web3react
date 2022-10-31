import "../styles/globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers"; //this is just a minimalist version of ethers, a way to get just the providers into here without importing ethers

//this Web3Provider needs a getLibrary function in order to exist
//this is the same as "function getLibrary(provider){}" btw, but js has a bunch of crazy different ways we can do things
const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

//objective: we add this Web3ReactProvider to make our aplication remember the state of whether or not we are connected to a wallet, across the different pages.
//if we didnt wrap it like this, we'd have to re-connect to the wallet in every single page
function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;
