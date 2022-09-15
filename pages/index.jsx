import Image from "next/image";
import MainLayout from "../layouts/MainLayout";
import BlurredBg from "../components/common/BlurredBg";

import inchLogo from "../public/inchLogo.svg";
import solanaLogo from "../public/solanaLogo.svg";
import aaveLogo from "../public/aaveLogo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout title={"Home"}>
      <BlurredBg></BlurredBg>
      <div className="wrapper">
        <div className="section">
          <h1 className="container center">
            Wallet Scoring and
            <br />
            Credentials Protocol
          </h1>
          <h2 className="container headline center home-subheading">
            The infrastucture for data-based personalized web3 experiences
          </h2>
        </div>
        <div className="section">
          <div className="container home-buttons">
            <Link href="/score">
              <a className="button dapp">
                <span>Try dApp</span>
              </a>
            </Link>
            <Link href="/">
              <a className="underline">
                <span className="docs">Read Docs</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="section">
          <div className="container fit overlay">
            <p>Backed by</p>
            <Link href='https://aave.com/?utm_source="nomis.cc"'>
              <a className="margin">
                <Image src={aaveLogo} alt="AAVE"></Image>
              </a>
            </Link>
            <Link href='https://solana.com/?utm_source="nomis.cc'>
              <a className="margin">
                <Image src={solanaLogo} alt="Solana"></Image>
              </a>
            </Link>
            <Link href='https://1inch.org/?utm_source="nomis.cc'>
              <a className="margin">
                <Image src={inchLogo} alt="1inch"></Image>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
