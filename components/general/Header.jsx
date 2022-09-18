import Link from "next/link";
import { useState, useEffect } from "react";

import Logo from "../common/Logo";
import { headerMenu } from "../../maps/menu";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 32);
    });
  }, []);
  return (
    <header className={scroll ? "scrolled" : ""}>
      <div className="wrapper">
        <section>
          <div className="container fit">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>

          <nav className="container fit">
            <ul>
              {headerMenu.map((item, idx) => (
                <li key={`menu item ${idx}`}>
                  <Link href={item.link}>
                    <a className="underline">{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
}
