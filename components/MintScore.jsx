import React from "react";
import { ethers } from "ethers";

import { Score } from "../components/Card";

export default function MintScore() {
  const [scoreValue, setScoreValue] = React.useState("");
  const [addressValue, setAddressValue] = React.useState("");
  const [scoreTokenValue, setScoreTokenValue] = React.useState("");
  const renderAfterCalled = React.useRef(false);
  if (window.ethereum === undefined) {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h3>
              Please{" "}
              <a target="_blank" href="https://metamask.io/download/">
                Install Metamask Extension
              </a>{" "}
              first.
            </h3>
          </div>
        </div>
      </div>
    );
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x361534d5ee6a1ce28add20905867eea4d02a0b04";
  const ABI =
    '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getScore","outputs":[{"components":[{"internalType":"uint16","name":"value","type":"uint16"},{"internalType":"uint256","name":"updated","type":"uint256"}],"internalType":"struct NomisScore.Score","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"scores","outputs":[{"internalType":"uint16","name":"value","type":"uint16"},{"internalType":"uint256","name":"updated","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"score","type":"uint16"}],"name":"setScore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
  const contract = new ethers.Contract(contractAddress, ABI, signer);

  const getScoreToken = async (address) => {
    try {
      const score = await contract.getScore(address);
      setScoreTokenValue(
        `${score.value / 100} , last update at ${new Date(
          score.updated * 1000
        ).toLocaleDateString()}`
      );
    } catch (error) {
      setScoreTokenValue(error.reason);

      console.error("getScore Error: ", error);
    }
  };

  async function fetchMyScore(address) {
    await fetch(`https://api.nomis.cc/api/v1/celo/wallet/${address}/score`)
      .then((res) => res.json())
      .then(
        (result) => {
          setScoreValue(Math.floor(result.data.score * 10000));
        },
        (error) => {
          console.error(error);
        }
      );
  }

  async function mintNomisToken() {
    try {
      const transaction = await contract.setScore(scoreValue);
      await transaction.wait();
      await getScoreToken();
    } catch (error) {
      console.error("setScore Error: ", error);
    }
  }

  async function onInit() {
    if (renderAfterCalled.current) {
      return;
    }
    renderAfterCalled.current = true;

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (window.ethereum.networkVersion !== "42220") {
      alert("Please select CELO Mainnet as current network in Metamask.");
      return;
    }

    setAddressValue(accounts[0]);
    setAddressValue(accounts[0]);
    getScoreToken(accounts[0]).catch(console.error);
    fetchMyScore(accounts[0]).catch(console.error);
    window.ethereum.on("accountsChanged", function (accounts) {
      getScoreToken(accounts[0]).catch(console.error);
      fetchMyScore(accounts[0]).catch(console.error);
    });
  }

  onInit();

  const wallet = { score: scoreValue / 10000 };

  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleOpen = () => {
    setTimeout(setIsOpen(true), 100);
    setTimeout(setIsVisible(true), 100);
  };

  const handleClose = () => {
    setTimeout(setIsOpen(false), 100);
    setTimeout(setIsVisible(false), 100);
  };

  return (
    <section className="mintButton">
      <button className="goMint" onClick={handleOpen}>
        Mint Your Score
      </button>
      {isOpen ? (
        <>
          <div
            className={`overlay${isVisible ? " visible" : ""}`}
            onClick={handleClose}
          ></div>
          <section className={`mint${isVisible ? " visible" : ""}`}>
            <div className="container">
              <div className="heading">
                <h3>Mint My Score</h3>
                <div className="close" onClick={handleClose}>
                  close
                </div>
              </div>
              <div className="wallet">
                <h4>Wallet Address</h4>
                <p className="address">{addressValue}</p>
              </div>

              {/* <div className="score">
          <h3>My Nomis Score on CELO:</h3>
          <p>Score: {scoreValue / 100}</p>
        </div> */}
              <Score wallet={wallet} />

              <div className="token">
                <h4>My Nomis Token on CELO</h4>
                <p>Minted Token: {scoreTokenValue}</p>
              </div>

              <div className="action">
                {/* <h3>Mint Token with My Score:</h3> */}
                <button
                  type="submit"
                  className="button"
                  onClick={mintNomisToken}
                >
                  Mint or Update
                </button>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </section>
  );
}
