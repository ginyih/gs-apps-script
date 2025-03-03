function YAHOO_FINANCE(ticker, type='price') {
	if (!ticker) {
		ticker = '^KLSE';
	}

	// Encode the ticker symbol to handle special characters
	var encodedTicker = encodeURIComponent(ticker);

	// URL for the Yahoo Finance API endpoint
	var apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodedTicker}?range=1d&interval=1m`;
	Logger.log('Fetching data from URL: ' + apiUrl);

	// Fetch the JSON data from the API
	var response = UrlFetchApp.fetch(apiUrl);
	var json = JSON.parse(response.getContentText());

	// Check if the data was returned correctly
	if (json.chart && json.chart.result) {
		var result = json.chart.result[0];

		if (type === 'price') {
			var stockPrice = result.meta.regularMarketPrice;
			Logger.log(`The current stock price of ${ticker} is: ` + stockPrice);
			return stockPrice;
		} else if (type === 'name') {
			var stockName = result.meta.shortName;
			Logger.log(`The stock name for ${ticker} is: ` + stockName);
			return stockName;
		}
	} else {
		Logger.log("No result found! Check if URL endpoint is correct.");
	}
}
