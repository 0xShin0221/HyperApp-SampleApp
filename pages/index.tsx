import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { ethers } from "ethers";
import { HYPERAPP_CONTRACT_ADDRESS, ABI } from "../constants";

import NavHeader from "../components/NavHeader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

type HyperAppHTMLHeaderNav = {
  title: string;
  metaDescription: string;
  navigationItems: string[];
  navigationItemLinks: string[];
};

const Home: NextPage = () => {
  const [hyperAppHTML, setHyperAppHTML] = useState<
    HyperAppHTMLHeaderNav | undefined
  >();
  const goerli_rpc_url = process.env.NEXT_PUBLIC_PUBLIC_RPC_URL;
  useEffect(() => {
    const getHtml = async () => {
      const provider = new ethers.providers.JsonRpcProvider(goerli_rpc_url);
      console.log(provider);
      const contract = new ethers.Contract(
        HYPERAPP_CONTRACT_ADDRESS,
        ABI,
        provider
      );
      const response = await contract.getHTML(1);
      setHyperAppHTML({
        title: response.header[0] as string,
        metaDescription: response.header[1] as string,
        navigationItems: response.navigationItems as string[],
        navigationItemLinks: response.navigationItemLinks as string[],
      });
    };
    getHtml().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hyperAppHTML) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title> {hyperAppHTML.title} </title>
        <meta name="description" content={hyperAppHTML.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader
        title={hyperAppHTML.title}
        metaDescription={hyperAppHTML.metaDescription}
        navigationItems={hyperAppHTML.navigationItems}
        navigationItemLinks={hyperAppHTML.navigationItemLinks}
      />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
