import wallet from "./artyshatilov.eth.json";

export default function handler(req, res) {
  res.status(200).json(wallet);
}
