# freection-chrome-extension
A chrome extension to integrate with Freection

## Getting Started
So what's in here?
First, there's a Chrome extension.
It starts with the manifest.json file, which states a content-script that would run within certain trusted sites.
The content script used is in src/loader.js.

Then, the content script loads a script from a remote endpoint.
This script contains the actual logic of the Chrome extension.

## How to build and install?
In order to build:

1. Zip all of the files and folders under the root folder.
2. Dev - Navigate to chrome://extensions/, make sure Developer Mode is on, and click "Load unpacked extension".
3. Prod - Go to [Chrome Webstore Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) and upload the zip.

You would also have to serve the endpoint which is loaded by the chrome extension.
It's not currently available in the project, but you'd have to build and package the files under 'src' into a single chrome.js bundle, and then serve this file from a server, with its endpoint reachable to the chrome extension that would be installed in the browser.

In Freection we use webpack with a preset of ES 2015, and then use a nodejs server and expressjs in order to serve it.

Good luck!
