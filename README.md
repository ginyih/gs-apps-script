# Here you will find various Google Sheet Custom Functions (App Scripts)

# How to Create a Custom Function in Google Sheets

Google Sheets allows you to create your own custom functions using **Google Apps Script**. Follow the steps below to create one:

## Step 1: Open Script Editor
1. Open your Google Sheet.
2. Click on **Extensions** in the top menu.
3. Select **Apps Script** from the dropdown.

## Step 2: Write Your Function(s) (javascript) under Code.js
1. In the Apps Script editor, you'll see a default `myFunction` code.
2. Replace the default code with your custom function or create from scratch however many custom functions as you like. For example:

```javascript
// This is a function that scrape data (stock market price) from Yahoo Finance utilizing regular expression (regex). 
function scrapeStockMarketPrice(ticker) {
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
```

## Step 3: Apply Your Custom Function(s)
1. Go back to your Google Sheet.
2. In any cell, enter your custom function as you would with any built-in function.
3. Example below, we want to fetch the market price of KLSE Bursa Malaysia "^KLSE" is the ticker. Ensure the ticker correspond with the stock you want to fetch by searching [here](https://finance.yahoo.com/).

```plaintext
=scrapeStockMarketPrice("^KLSE")
```

## Step 4: Enjoy Your Custom Function
1. Your custom function will now work just like any built-in function.
2. You can modify the script in the Apps Script editor to enhance or change the function's behavior.

That's it! You’ve created a custom function for Google Sheets using Google Apps Script.
Feel free to adjust the example or steps to fit your specific use case!
