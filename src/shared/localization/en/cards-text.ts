import { ICardsTexts } from "../types";

export const cardsText: ICardsTexts = {
  score: {
    heading: [
      "Nomis Score", // normal
    ],
    text: [
      "The overall Nomis Score is {score}.", // normal
    ],
  },
  pulse: {
    heading: [
      "Inactive Wallet", // noData :true
      "Wallet's Pulse", // normal
    ],
    text: [
      "Here you will see activity pulse after a couple of transactions.", // noData: true
      "There is no data to show", // don't turnover intervals for chain
      "This is the wallet's on-chain activity. The most active month is {month}.", // normal
    ],
  },
  turnover: {
    heading: [
      "Inactive Wallet", // noData: true
      "Little Activity", // turnoverUSD <= 10
      "Web3 Enthusiast", // turnoverUSD <= 100
      "Active User", // turnoverUSD <= 1000
      "Could be a Trader", // turnoverUSD <= 10000
      "A Big Spender", // turnoverUSD <= 100000
      "Isn't it a Foundation?", // turnoverUSD > 100000
    ],
    text: [
      "This wallet has no transactions.", // noData: true
      "This wallet has total spendings of less than {value} {coin}.", // turnoverUSD <= 100
      "This wallet has total spendings of more than {value} {coin}.", // turnoverUSD > 100
    ],
  },
  age: {
    heading: [
      "Inactive Wallet", // noData: true
      "Amateur", // walletAge <= 1/4 of blockchain life
      "Enjoyer", // walletAge <= 2/4 of blockchain life
      "Enthusiast", // walletAge <= 3/4 of blockchain life
      "Ancient", // walletAge <= 4/4 of blockchain life
    ],
    text: [
      "There is no on-chain activity.", // noData: true
      "Welcome to th Web3 world.", // walletAge <= 1/4 of blockchain life
      "The history of this wallet has began {month} months ago.", // normal
    ],
  },
};
