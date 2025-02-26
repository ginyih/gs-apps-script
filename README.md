# Getting Started with Google Sheets Apps Script
Google Sheets allows you to extend its functionality using Google Apps Script. You can create custom functions, automate tasks, and interact with other Google services. Here's a simple guide to get you started with creating a custom function in Google Sheets.

## Step 1: Open Google Sheets
1. Go to [Google Sheets](https://sheets.google.com) and open a new or existing spreadsheet.

## Step 2: Open the Script Editor
1. In the Google Sheets menu, click on `Extensions`.
2. Select `Apps Script`. This will open the Apps Script editor where you can write your custom scripts.

## Step 3: Create a Custom Function
1. In the Apps Script editor, you'll see a default script file named `Code.gs`.
2. Delete any existing code and create a new function. Here's an example of a custom function that adds two numbers:
```javascript
function ADD_NUMBERS(num1, num2) {
    return num1 + num2;
}
```

## Step 4: Use the Custom Function in Google Sheets
1. Go back to your Google Sheets spreadsheet.
2. In any cell, you can now use your custom function just like a built-in function:
```plaintext
=ADD_NUMBERS(5, 7)
```
This will return `12`, as the function adds the two numbers you provided.

## Step 5: Save and Close
1. When you're done, click `File > Save`, and you can close the Apps Script editor. Your custom function will be available for use in your Google Sheets.
2. In any cell, you can now use your custom function just like a built-in function:

### Troubleshooting Tips:
1. **Function not recognized**: If your function isn't showing up in Google Sheets, make sure you saved the script and that there are no errors in the code.
2. **Permissions**: Some scripts may require you to authorize the script to run. If prompted, follow the on-screen instructions to grant permissions.

Congratulations! You've just created and used your first custom function in Google Sheets with Apps Script.
