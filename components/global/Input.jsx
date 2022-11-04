import React from "react";
import { useRouter } from "next/router";

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
      : blockchain === "klaytn"
      ? "5"
      : blockchain === "moonbeam"
      ? "6"
      : blockchain === "polygon"
      ? "7"
      : blockchain === "ripple"
      ? "8"
      : blockchain === "solana"
      ? "9"
      : initialInput;

  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(activeBlockchain);
  const [address, setAddress] = React.useState(fullAddress ? fullAddress : "");
  const [isLoading, setIsLoading] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState(
    blockchains[initialInput].placeholder
  );
  const [pressed, setPressed] = React.useState(false);

  // React.useEffect(() => {
  //   const handleStart = (url) => url !== router.asPath && setIsLoading(true);
  //   const handleComplete = (url) =>
  //     url === router.asPath && setIsLoading(false);
  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // });

  const router = useRouter();
  // const www = "https://test.nomis.cc";
  const www = "https://nomis.cc";
  // const www = "http://localhost:3000";

  const [isMac, setIsMac] = React.useState(null);
  React.useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMac(userAgent.search("Mac") !== -1 ? true : false);
  });

  const handleClick = async () => {
    await router.push(`${www}/score/${blockchains[active].slug}/${address}`);
    // await router.reload();
  };

  const handleEnter = async (e) => {
    if (e.keyCode === 13) {
      // console.log("Enter " + address);
      await router.push(`${www}/score/${blockchains[active].slug}/${address}`);
      // await router.reload();
    }
  };

  const [hide, setHide] = React.useState(false);

  const inputRef = React.useRef();
  if (isMac) {
    useHotkeys("cmd+/", () => {
      inputRef.current.focus();
      setTimeout(() => setPressed(false), 500);
      setPressed(true);
    });
  } else {
    useHotkeys("ctrl+/", () => {
      inputRef.current.focus();
      setTimeout(() => setPressed(false), 500);
      setPressed(true);
    });
  }

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
            id="fullAddress"
            placeholder={placeholder}
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={handleEnter}
            defaultValue={address}
            autoComplete="false"
            onFocus={() => setHide(!hide)}
            onBlur={() => setHide(!hide)}
          />
          <div className={`loading${isLoading ? " isLoading" : ""}`}>
            Loading
          </div>
          <div
            className={`shortcut${hide ? " hide" : ""}${
              pressed ? " pressed" : ""
            }${isLoading ? " isLoading" : ""}`}
          >
            {isMac ? "cmd+/" : "ctrl+/"}
          </div>
        </div>
        <button onClick={handleClick} className="button callout"></button>
      </div>
    </div>
  );
}
