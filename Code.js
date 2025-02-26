// Yahoo Finance Data Scraper
function YAHOO_FINANCE(ticker, type='price') {
  if (!ticker) {
    ticker = '^KLSE';
  }

  // Encode the ticker symbol to handle special characters
  var encodedTicker = encodeURIComponent(ticker);

  // URL of the Yahoo Finance page for Apple (AAPL)
  var url = `https://finance.yahoo.com/quote/${encodedTicker}`;
  Logger.log('Fetching data from URL: ' + url);

  // Fetch the HTML content of the page
  var response = UrlFetchApp.fetch(url);
  var html = response.getContentText();

  if (type === 'price') {
    // Use regular expression to extract stock price from the HTML
    var priceRegex = /<span\s+class="base\s+yf-ipw1h0"\s+data-testid="qsp-price">([\d,\.]+)\s*<\/span>/;
    var priceMatch = html.match(priceRegex);
    if (priceMatch) {
      var stockPrice = priceMatch[1];
      Logger.log(`The current stock price of ${ticker} is: ` + stockPrice);
      return stockPrice;
    }
  } else if (type === 'header') {
    var headerRegex = /<h1 class="yf-xxbei9">([^<\(]+)(?=\s?\()/;
    var headerMatch = html.match(headerRegex);
    if (headerMatch) {
      var headerText = headerMatch[1];
      Logger.log(`The header text for ${ticker} is: ` + headerText);
    }
  }
}
