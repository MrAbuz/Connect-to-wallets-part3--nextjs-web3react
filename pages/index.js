import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector"; //we import this to connect to "metamask". too add other wallets support we'd import others
import { abi } from "../constants/abi";
import { ethers } from "ethers";
//always remember that I have to yarn add everything that I add here after 'from'

const injected = new InjectedConnector();

export default function Home() {
  const { activate, active, library: provider } = useWeb3React(); //this has a field(?) called library, we're renaming it to provider.
  //and an "active" so we can see if we're connected or not, which is really helpful
  //and we can use this hook across all of our different pages to always know if we're connected or not

  async function connect() {
    //now instead of doing it with window.ethereum:
    try {
      await activate(injected); //*
    } catch (e) {
      console.log(e);
    }
  }

  async function execute() {
    if (active) {
      const signer = provider.getSigner(); //same way to get the signer but now the provider comes from what we imported above, which is really helpful
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(42);
      } catch (error) {
        console.log(error);
      }
    }
  }

  //its active? then x : if not y
  //the active comes from above and lets us know if we are connected
  return (
    <div>
      {active ? (
        <>
          "Connected! "<button onClick={() => execute()}>Execute</button>
        </>
      ) : (
        <button onClick={() => connect()}>Connect</button>
      )}
    </div>
  );
}

// * https://github.com/Uniswap/web3-react/tree/v6/docs/connectors
// web3react comes with a bunch of built in connectors, so "injected" (Metamask) is one of the main ones, however there's a whole lot more
// there all this type of wallets that have different kinds of connections
// if we want our application to support them (ledger, trezor etc) all we have to do is import them
// here we're gonna work with just the "injected" (metamask), but to work with more we can just import more, and inside "activate()" choose wathever one the user pressed
// if we wanted to connect to anything else we can easily just read the docs for that wallet connection through the link above
