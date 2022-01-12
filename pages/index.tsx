import { NextPage } from "next";
import Head from "next/head";
import { useUserContext } from "../context/UserContextProvider";
import useWalletBalance from "../context/WalletBalanceProvider";
import { DemoButton } from "../components/DemoButton";
import * as solanaWeb3 from "@solana/web3.js";

const Index: NextPage = () => {
  const { demo, setDemo } = useUserContext();
  const [balance] = useWalletBalance();
  console.log("solanaWeb3", solanaWeb3);
  return (
    <div className="">
      <Head>
        <title>Next.js CMv2 Demo</title>
        <meta name="description" content="Candy Machine V2 Demo with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">{demo}</h1>
        <button onClick={() => setDemo("Demo Changing Context")}>
          Click me
        </button>
        <DemoButton />
        <p>{balance}</p>
      </main>
    </div>
  );
};

export default Index;
