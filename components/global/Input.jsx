import { useState } from "react";
import { useRouter } from "next/router";

import { useEffect, useRef } from "react";

import { blockchains } from "../../utilities/blockchains";

import { useHotkeys } from "react-hotkeys-hook";

export default function Input({ fullAddress, blockchain }) {
  const initialInput = 3;
  const activeBlockchain =
    blockchain === "aeternity"
      ? "0"
      : blockchain === "bsc"
      ? "1"
      : blockchain === "cube"
      ? "2"
      : blockchain === "ethereum"
      ? "3"
      : blockchain === "evmos"
      ? "4"
      : blockchain === "moonbeam"
      ? "5"
      : blockchain === "polygon"
      ? "6"
      : blockchain === "ripple"
      ? "7"
      : blockchain === "solana"
      ? "8"
      : initialInput;

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(activeBlockchain);
  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    blockchains[initialInput].placeholder
  );
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

  const handleClick = async (e) => {
    await e.preventDefault();
    setAddress(e.target.value);
    console.log("___ " + e.target.value);
    await router.push(`${www}/score/${blockchains[active].slug}/${address}`);
  };

  const handleEnter = async (e) => {
    if (e.keyCode === 13) {
      await e.preventDefault();
      setAddress(e.target.value);
      console.log(e.target.value);
      await router.push(`${www}/score/${blockchains[active].slug}/${address}`);
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
          {console.log("<<<<<<< " + fullAddress)}
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
