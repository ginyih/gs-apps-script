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
