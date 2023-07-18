```javascript
let bitcoinPriceElement = document.getElementById('bitcoinPrice');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "priceUpdate") {
      updatePrice(request.price);
    }
  }
);

function updatePrice(price) {
  bitcoinPriceElement.textContent = price;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.sendMessage({message: "fetchPrice"}, function(response) {
    updatePrice(response.price);
  });
});
```