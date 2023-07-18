```javascript
let bitcoinPrice = null;

const fetchPrice = async () => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  const data = await response.json();
  bitcoinPrice = data.bpi.USD.rate_float;
};

chrome.runtime.onInstalled.addListener(() => {
  fetchPrice();
  setInterval(fetchPrice, 60000);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'priceUpdate') {
    sendResponse({price: bitcoinPrice});
  }
});
```