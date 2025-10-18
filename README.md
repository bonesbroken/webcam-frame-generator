App Store URL:  
Website: https://bonesbroken.com/  

# StatLine
Display your game events in a customizable vertical feed. Open Source app for [Streamlabs Desktop](https://streamlabs.com/streamlabs-live-streaming-software).

### Getting Started
Clone the project. Run a terminal from the application folder and run `npm i` to install dependencies. To build the app, run `npx webpack`.

This project is build with Webpack, JQuery, and uses [shoelace.style](https://shoelace.style/) as a component library. The [official documentation page](https://slobs-platform.readme.io/docs/getting-started) will help you get started with building apps using the Streamlabs APIs. Visit to the Streamlabs App Store Developer page and click [Create App](https://platform.streamlabs.com/) to create your first app. 

Once built, open Streamlabs Desktop. Go to Settings > Developer and click Browse beside Unpacked App Path, navigate to where you cloned this repository and select the `application` folder. For the App Token field, go to the [Devs Page](https://platform.streamlabs.com/developer/apps) on platform.streamlabs.com and click Edit on your app. Click on Test App on the left sidebar and click Copy beside Personal token. Paste this token into the App Token field in Streamlabs Desktop, then click Load App.

If this prompted a Developer Tools window to pop up - success! You've loaded the app in Streamlabs Desktop. You can view your "settings.html" page from the left sidebar in Streamlabs Desktop under App Store. The "index.html" page is your app as a Browser Source. You can add this source to your scene from the Editor by clicking Sources > Add Source > Apps > select the source called "App Source". The description and image you see when selecting the app is pulled from your `manifest.json`.
