# freection-chrome-extension
A chrome extension to integrate with Freection

## Getting Started

### The code

* manifest.json - the root of the extension.
* /content.js - the base code file, where everything starts to run.

### Prerequisites

* Install npm
* Then run in the root directory: npm install

## How to build?

### Dev
1. npm run build
2. Navigate to chrome://extensions/, make sure Developer Mode is on, and click "Load unpacked extension". 
3. Pick the "dist" folder. 

### Prod
1. npm run build
2. npm run package
3. Navigate to [Chrome Webstore Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) and upload the "dist/extension.zip" file.

## How to test
1. Once the Chrome Extension is installed, open a browser tab next to your https://app.freection.com tab, and navigate to Gmail, with the same account that is logged in to Freection.
2. You should see a "Do" button next to every email row.

Good luck!
