export default function Stats({
  totalTransactions,
  averageTransactionTime,
  transactionsPerMonth,
  balance,
  turnover,
  age,
  maxTransactionTime,
  timeFromLastTransaction,
  lastMonthTransactions,
  nftHolding,
  nftTrading,
  nftWorth,
  tokensHolding,
  deployedContracts,
}) {
  return (
    <div className="container grid">
      <div className="container hint">
        <div className="callout parameter">Parameter</div>
        <div className="callout value">Value</div>
        <div className="callout description">Description</div>
      </div>

      <div className="container line totalTransactions">
        <div className="caption parameter">totalTransactions</div>
        <div className="caption value">{totalTransactions}</div>
        <div className="caption description">
          <div>Total transactions on wallet</div>
          <span className="footnote">Number</span>
        </div>
      </div>

      <div className="container line averageTransactionTime">
        <div className="caption parameter">averageTransactionTime</div>
        <div className="caption value">{averageTransactionTime}</div>
        <div className="caption description">
          <div>Average time interval between transactions</div>
          <span className="footnote">Hours</span>
        </div>
      </div>

      <div className="container line transactionsPerMonth">
        <div className="caption parameter">transactionsPerMonth</div>
        <div className="caption value">{transactionsPerMonth}</div>
        <div className="caption description">
          <div>Average transaction per months</div>
          <span className="footnote">Number</span>
        </div>
      </div>

      <div className="container line balance">
        <div className="caption parameter">balance</div>
        <div className="caption value">{balance}</div>
        <div className="caption description">
          <div>Wallet’s current balance</div>
          <span className="footnote">ETH</span>
        </div>
      </div>

      <div className="container line turnover">
        <div className="caption parameter">walletTurnover</div>
        <div className="caption value">{turnover}</div>
        <div className="caption description">
          <div>The movement of funds on the wallet</div>
          <span className="footnote">ETH</span>
        </div>
      </div>

      <div className="container line age">
        <div className="caption parameter">walletage</div>
        <div className="caption value">{age}</div>
        <div className="caption description">
          <div>Wallet age</div>
          <span className="footnote">Months</span>
        </div>
      </div>

      <div className="container line maxTransactionTime">
        <div className="caption parameter">maxTransactionTime</div>
        <div className="caption value">{maxTransactionTime}</div>
        <div className="caption description">
          <div>Maximum time interval between transactions</div>
          <span className="footnote">Hours</span>
        </div>
      </div>

      <div className="container line timeFromLastTransaction">
        <div className="caption parameter">timeFromLastTransaction</div>
        <div className="caption value">{timeFromLastTransaction}</div>
        <div className="caption description">
          <div>Time since last transaction</div>
          <span className="footnote">Months</span>
        </div>
      </div>

      <div className="container line lastMonthTransactions">
        <div className="caption parameter">lastMonthTransactions</div>
        <div className="caption value">{lastMonthTransactions}</div>
        <div className="caption description">
          <div>Last month transactions</div>
          <span className="footnote">Number</span>
        </div>
      </div>

      <div className="container line nftHolding">
        <div className="caption parameter">nftHolding</div>
        <div className="caption value">{nftHolding}</div>
        <div className="caption description">
          <div>Total NFTs on wallet</div>
          <span className="footnote">Number</span>
        </div>
      </div>

      <div className="container line nftTrading">
        <div className="caption parameter">nftTrading</div>
        <div className="caption value">{nftTrading}</div>
        <div className="caption description">
          <div>NFT trading activity</div>
          <span className="footnote">ETH</span>
        </div>
      </div>

      <div className="container line nftWorth">
        <div className="caption parameter">nftWorth</div>
        <div className="caption value">{nftWorth}</div>
        <div className="caption description">
          <div>NFT worth on wallet</div>
          <span className="footnote">ETH</span>
        </div>
      </div>

      <div className="container line tokensHolding">
        <div className="caption parameter">tokensHolding</div>
        <div className="caption value">{tokensHolding}</div>
        <div className="caption description">
          <div>Value of all holding tokens</div>
          <span className="footnote">Number</span>
        </div>
      </div>

      <div className="container line deployedContracts">
        <div className="caption parameter">deployedContracts</div>
        <div className="caption value">{deployedContracts}</div>
        <div className="caption description">
          <div>Amount of deployed smart-contracts</div>
          <span className="footnote">Number</span>
        </div>
      </div>
    </div>
  );
}
