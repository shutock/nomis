import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";

import inchLogo from "../public/backed/inchLogo.svg";
import solanaLogo from "../public/backed/solanaLogo.svg";
import aaveLogo from "../public/backed/aaveLogo.svg";

import MainLayout from "../layouts/Main";
import background from "../utilities/background.json";

export default function Home() {
  return (
    <MainLayout title="Home">
      <div className="wrapper Home">
        <section className="title">
          <h1>Wallet Scoring and Credentials Protocol</h1>
          <h2>
            The infrastructure for data-based personalized web3 experiences
          </h2>
        </section>
        <section className="buttons">
          <Link href="/score">
            <button className="dapp">
              <span>Try dApp</span>
            </button>
          </Link>
          <Link href="https://api.nomis.cc" passHref>
            <a target="_blank">
              <button className="docs">
                <span>Read Docs</span>
              </button>
            </a>
          </Link>
        </section>
        <section className="backed">
          <p>Backed by</p>
          <Link href='https://aave.com/?utm_source="nomis.cc"' passHref>
            <a target="_blank">
              <Image src={aaveLogo} alt="AAVE"></Image>
            </a>
          </Link>
          <Link href='https://solana.com/?utm_source="nomis.cc"' passHref>
            <a target="_blank">
              <Image src={solanaLogo} alt="Solana"></Image>
            </a>
          </Link>
          <Link href='https://1inch.io/?utm_source="nomis.cc"' passHref>
            <a target="_blank" className="inch">
              <Image src={inchLogo} alt="1inch"></Image>
            </a>
          </Link>
        </section>
      </div>
    </MainLayout>
  );
}
