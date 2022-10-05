import { useState } from "react";
import { useRouter } from "next/router";

import { useEffect, useRef } from "react";

import { blockchains } from "../../utilities/blockchains";

import { useHotkeys } from "react-hotkeys-hook";

export default function Input({ fullAddress, blockchain }) {
  const activeBlockchain =
    blockchain === "aeternity"
      ? "0"
      : blockchain === "bsc"
      ? "1"
      : blockchain === "ethereum"
      ? "2"
      : blockchain === "evmos"
      ? "3"
      : blockchain === "polygon"
      ? "4"
      : blockchain === "ripple"
      ? "5"
      : "6";

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(activeBlockchain);
  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [pressed, setPressed] = useState(false);

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

  const www = "http://localhost:3000";

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
    setTimeout(() => setPressed(false), 500);
    setPressed(true);
  });

  return (
    <div className="Input">
      <ul
        className={`blockchains ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <li className="blockchainActive" onClick={() => setIsOpen(!isOpen)}>
          <img src={blockchains[active].icon} alt={blockchains[active].item} />
          <span>{blockchains[active].item}</span>
        </li>
        {blockchains.map((item, id) =>
          id != active ? (
            <li
              key={item.item}
              className="blockchain"
              onClick={() => {
                setPlaceholder(blockchains[id].placeholder);
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
      <div className="field">
        <div className="inputWrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={handleEnter}
            defaultValue={fullAddress}
            autoComplete={false}
          />
          <div className={`loading ${isLoading ? "isLoading" : ""}`}>
            Loading
          </div>
          <div
            className={`shortcut ${pressed ? "pressed" : ""} ${
              isLoading ? "isLoading" : ""
            }`}
          >
            ctrl+/
          </div>
        </div>
        <button onClick={handleClick} className="button callout">
          Get Score
        </button>
      </div>
    </div>
  );
}
