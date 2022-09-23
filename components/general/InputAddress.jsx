import { useState } from "react";
import { useRouter } from "next/router";

import { useEffect, useRef } from "react";

import { blockchains } from "../../maps/blockchains";

import { useHotkeys } from "react-hotkeys-hook";

export default function InputAddress() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(2);
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setIsLoading(true);
    const handleComplete = (url) =>
      url === router.asPath && setIsLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  const router = useRouter();

  const www = "https://nomis.vercel.app";

  const handleClick = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    router.push(`${www}/score/${blockchains[active].slug}/${address}`);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setAddress(e.target.value);
      router.push(`${www}/score/${blockchains[active].slug}/${address}`);
    }
  };

  const inputRef = useRef();

  useHotkeys("ctrl+/", () => {
    inputRef.current.focus();
  });

  return (
    <div className="cotainer input">
      <div className="container inputContainer">
        <ul className={`blockchains ${isOpen ? "active" : ""}`}>
          <div className="expand icon" onClick={() => setIsOpen(!isOpen)}></div>
          <li className="blockchainActive" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={blockchains[active].icon}
              alt={blockchains[active].item}
            />
            <span>{blockchains[active].item}</span>
          </li>
          {blockchains.map((item, id) =>
            id != active ? (
              <li
                key={item.item}
                className="blockchain"
                onClick={() => {
                  setActive(id);
                  setIsOpen(!isOpen);
                }}
              >
                <img src={item.icon} alt={item.item} />
                <span>{item.item}</span>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <div className="forTablet">
          <div className="inputWrapper">
            <input
              ref={inputRef}
              className="callout"
              type="text"
              placeholder="Put your address here, like 0x... or .eth/.sol..."
              name="address"
              required
              onChange={(e) => setAddress(e.target.value)}
              onKeyDown={handleEnter}
            />
            <div className={`loading ${isLoading ? "isLoading" : ""}`}>
              Loading
            </div>
          </div>
          <button onClick={handleClick} className="button callout">
            Get Score
          </button>
        </div>
        <div
          onClick={isOpen ? () => setIsOpen(!isOpen) : () => {}}
          className={`overlay ${isOpen ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}
