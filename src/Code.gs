// This is a function that scrape data (stock market price) from Yahoo Finance utilizing regular expression (regex).  
function scrapeStockMarketPrice(ticker) {
	if (!ticker) {
		ticker = '1023.KL';
	}
	
	// Encode the ticker symbol to handle special characters
	var encodedTicker = encodeURIComponent(ticker);
	
	// URL of the Yahoo Finance page for ticker
	var url = `https://finance.yahoo.com/quote/${encodedTicker}`;
	# Logger.log('Fetching data from URL: ' + url);
	
	// Fetch the HTML content of the page
	var response = UrlFetchApp.fetch(url);
	var html = response.getContentText();
	
	// Use a regular expression to extract the stock price from the HTML
	var regex = /<span\s+class="base\s+yf-ipw1h0"\s+data-testid="qsp-price">([\d,\.]+)\s*<\/span>/;
	var match = html.match(regex);
	
	// If a match is found, extract and log the stock price
	if (match) {
		var stockPrice = match[1];
		Logger.log(`The current stock price of ${ticker} is: $` + stockPrice);
		return stockPrice
	}
}
