import { useState } from "react";

export default function UserAddress({ address, shortAddress }) {
  const [copy, setCopy] = useState("");
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setTimeout(() => setCopy(""), 1000);
    setCopy("copy");
  };
  return (
    <div className={`container address ${copy}`}>
      <h4 onClick={copyToClipboard} className="addressUsername">
        {shortAddress}
      </h4>
      <span className="copyNotify">Address copied!</span>
    </div>
  );
}
