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
        <section className="center">
          <div className="container">
            <h1>
              Wallet Scoring and
              <br />
              Credentials Protocol
            </h1>
          </div>
          <div className="container">
            <h2 className="headline home-subheading">
              The infrastucture for data-based personalized web3 experiences
            </h2>
          </div>
        </section>

        <section className="center">
          <div className="container buttons">
            <Link href="/score">
              <a className="button big dapp">
                <span>Try dApp</span>
              </a>
            </Link>
            <Link href="/">
              <a className="button big docs">
                <span>Read Docs</span>
              </a>
            </Link>
          </div>
        </section>

        <section className="center">
          <div className="container fit overlay backed">
            <p>Backed by</p>
            <Link href='https://aave.com/?utm_source="nomis.cc"'>
              <a className="margin">
                <Image src={aaveLogo} alt="AAVE"></Image>
              </a>
            </Link>
            <Link href='https://solana.com/?utm_source="nomis.cc"'>
              <a className="margin">
                <Image src={solanaLogo} alt="Solana"></Image>
              </a>
            </Link>
            <Link href='https://1inch.org/?utm_source="nomis.cc"'>
              <a className="margin inch">
                <Image src={inchLogo} alt="1inch"></Image>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
