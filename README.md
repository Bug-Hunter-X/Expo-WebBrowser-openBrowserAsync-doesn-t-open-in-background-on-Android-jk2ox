# Expo WebBrowser.openBrowserAsync Doesn't Open in Background on Android

This repository demonstrates a bug where `WebBrowser.openBrowserAsync` from the Expo SDK fails to open a browser in the background on Android. The documentation does not explicitly mention this limitation, leading to unexpected behavior.

## Bug Description

When calling `WebBrowser.openBrowserAsync` on Android within an Expo app, the browser does not open in the background. This is inconsistent with the behavior on iOS and could cause issues if background browser operation is needed for certain app functionalities.

## Reproduction

1. Clone this repository.
2. Install the necessary dependencies using `npm install` or `yarn install`.
3. Run the app on an Android emulator or device.
4. Observe that when `handlePress` is called, the browser does not open in the background.  Instead, it might prompt the user to open the browser or open it in the foreground.

## Solution

Currently there's no direct solution within the Expo SDK to reliably force a browser to open in the background on Android.  The functionality might require a different approach using external libraries or native Android modules.  This issue highlights a potential gap in the Expo WebBrowser API's cross-platform consistency.