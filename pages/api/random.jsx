function haiku() {
  var adjs = [
      "autumn",
      "hidden",
      "bitter",
      "misty",
      "silent",
      "empty",
      "dry",
      "dark",
      "summer",
      "icy",
      "delicate",
      "quiet",
      "white",
      "cool",
      "spring",
      "winter",
      "patient",
      "twilight",
      "dawn",
      "crimson",
      "wispy",
      "weathered",
      "blue",
      "billowing",
      "broken",
      "cold",
      "damp",
      "falling",
      "frosty",
      "green",
      "long",
      "late",
      "lingering",
      "bold",
      "little",
      "morning",
      "muddy",
      "old",
      "red",
      "rough",
      "still",
      "small",
      "sparkling",
      "throbbing",
      "shy",
      "wandering",
      "withered",
      "wild",
      "black",
      "young",
      "holy",
      "solitary",
      "fragrant",
      "aged",
      "snowy",
      "proud",
      "floral",
      "restless",
      "divine",
      "polished",
      "ancient",
      "purple",
      "lively",
      "nameless",
    ],
    nouns = [
      "waterfall",
      "river",
      "breeze",
      "moon",
      "rain",
      "wind",
      "sea",
      "morning",
      "snow",
      "lake",
      "sunset",
      "pine",
      "shadow",
      "leaf",
      "dawn",
      "glitter",
      "forest",
      "hill",
      "cloud",
      "meadow",
      "sun",
      "glade",
      "bird",
      "brook",
      "butterfly",
      "bush",
      "dew",
      "dust",
      "field",
      "fire",
      "flower",
      "firefly",
      "feather",
      "grass",
      "haze",
      "mountain",
      "night",
      "pond",
      "darkness",
      "snowflake",
      "silence",
      "sound",
      "sky",
      "shape",
      "surf",
      "thunder",
      "violet",
      "water",
      "wildflower",
      "wave",
      "water",
      "resonance",
      "sun",
      "wood",
      "dream",
      "cherry",
      "tree",
      "fog",
      "frost",
      "voice",
      "paper",
      "frog",
      "smoke",
      "star",
    ];
  return (
    adjs[Math.floor(Math.random() * (adjs.length - 1))] +
    "_" +
    nouns[Math.floor(Math.random() * (nouns.length - 1))] +
    ".eth"
  );
}

function apps(count) {
  var list = ["AAVE", "Rainbow", "OpenSea", "Rarible", "UniSwap"];
  return Array.from(
    { length: count },
    (_, i) => list[Math.floor(Math.random() * (list.length - 1))]
  );
}

function rand(multiply) {
  return Math.round(parseFloat(Math.random() * multiply) * 100) / 100;
}

export default function handler(req, res) {
  res.status(200).json({
    address: haiku(),
    blockchain: "eth",
    userpick: "https://thispersondoesnotexist.com/image",
    score: rand(100),
    age: rand(100),
    balance: rand(0.1),
    turnover: rand(100),
    spendings: rand(100),
    activity: [
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
      rand(10),
    ],
    recentActivity: apps(rand(10)),
    totalTransactions: rand(100),
    averageTransactionTime: rand(100),
    transactionsPerMonth: rand(100),
    maxTransactionTime: rand(100),
    timeFromLastTransaction: rand(100),
    lastMonthTransactions: rand(100),
    nftHolding: rand(100),
    ftWorth: rand(100),
    tokensHolding: rand(100),
    deployedContracts: rand(100),
  });
}