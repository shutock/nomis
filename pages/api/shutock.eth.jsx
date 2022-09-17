import wallet from "./shutock.eth.json";

export default function handler(req, res) {
  res.status(200).json(wallet);
}
