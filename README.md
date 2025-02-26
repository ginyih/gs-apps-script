## Pre-requisites:
### 1. Install Node.js on Windows:
**clasp** is a Node.js package, so you need to install **Node.js** first.
1. Download the [LTS version](https://nodejs.org/en) (Long Term Support version) of Node.js for Windows.
2. Run the installer and follow the installation instructions.

### 2. Install clasp using npm
Once you have Node.js installed, open **Command Prompt** or **PowerShell** and run the following command to install **clasp** globally:
```bash
npm install -g @google.clasp
```
This command installs **clasp** globally on your machine, making it available from any directory.

### 3. Verify installation
To verify that clasp has been installed successfully, run:
```bash
clasp --version
```
This will print the version of **clasp** that is installed.

### 4. Authenticate with your Google Account
After Installation, you need to authenticate **clasp** to access your Google Apps Script projects.
Run this command:
```bash
clasp login
```
This will open a browser window asking you to sign in to your Google account. After that, you can start using **clasp**.
