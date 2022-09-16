import Link from "next/link";

import Logo from "../common/Logo";
import { footerMenu } from "../../maps/menu";

export default function Header() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <section>
            <div className="container start">
              <Link href="/">
                <a className="margin">
                  <Logo></Logo>
                </a>
              </Link>
            </div>

            <p className="footnote container start">
              Nomis is a wallet scoring and credentials protocol which helps
              on-chain developers build better DeFi products.
            </p>

            <nav className="container start">
              <ul>
                {footerMenu.map((item, idx) => (
                  <li key={`menu item ${idx}`}>
                    <Link href={item.link}>
                      <a className="footnote underline">{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="container start">
              <Link href="mailto:gm@nomis.cc">
                <a className="footnote underline">gm@nomis.cc</a>
              </Link>
            </div>

            <p className="footnote container start">
              2022 © Nomis. All rights reserved.
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}
