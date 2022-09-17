import wallet from "./wallet.json";

export default function handler(req, res) {
  res.status(200).json(wallet);
}
