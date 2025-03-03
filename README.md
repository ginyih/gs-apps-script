# How to start using my custom Google App Scripts:

## Open Google Sheets:
   - Open a Google Sheets document.

## Access the Script Editor:
   - Click on `Extensions` in the top menu.
   - Select `Apps Script`.

## Create a New Script:
   - A new project is automatically created.
   - You can rename the project by clicking the name at the top if you want.

## Copy functions you want from `src/Code.js`:
   - Copy the function(s) you want from `Code.js` from this repo. In this example we copy `YAHOO_FINANCE` function:
   ```javascript
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
   ```
   This function accepts 2 inputs as can see from the script above `YAHOO_FINANCE(x, x)`.
   - The first input is the symbol ticker. Head to [Yahoo Finance](https://finance.yahoo.com/) to search for the ticker you want to scrape.
   - The second input is optional ("price" or "header") and by default is set to "price" which means when running `YAHOO_FINANCE("^KLSE", "price")` will return the stock price. Alternatively, you can use "header" to return the stock name instead.

## Save Your Script:
   - Click `File > Save` or press `Ctrl + S` to save your code.

## Execute Your Script:
   - Back in your Google Sheet, in any cell, type/apply `=CUSTOM_FUNCTION(...)` to start using the function(s) you copied to your Apps Script editor.
   - In the case of above example: 
      - `=YAHOO_FINANCE("^KLSE", "price")` will return the current market price of Bursa Malaysia in the applied cell (1,583.24) at this time of writing.
      - `=YAHOO_FINANCE("^KLSE", "header")` will return the name of Bursa Malaysia in the applied cell (FTSE Bursa Malaysia KLCI) at this time of writing.
