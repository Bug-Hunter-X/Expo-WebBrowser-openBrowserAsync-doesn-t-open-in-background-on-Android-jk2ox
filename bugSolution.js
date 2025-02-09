There is no direct solution within Expo's WebBrowser API to force background browser opening on Android.  Alternative approaches might involve:

1. **Using a custom native module:**  This is a more advanced approach that requires Android development skills.  A native Android module could be created to handle opening the browser using Android's intent system with flags that allow background operation.
2. **Using a third-party library:** Research third-party libraries that offer more granular control over opening external URLs on Android. Be sure to check the compatibility and safety of any library before integrating it into your app.
3. **Accepting the limitation:**  If background browser operation isn't critical, the current behavior might need to be accepted. Update the app to inform users that the browser might open in the foreground.

Note: The best solution depends heavily on the specific app requirements and the developer's skills and resources.