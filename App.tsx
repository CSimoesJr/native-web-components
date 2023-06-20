import React from 'react';
import WebView from 'react-native-webview';

export default function App() {
  // return <RenderHtml contentWidth={width} source={source} />;
  return (
    // <WebView
    //   originWhitelist={['*']}
    //   source={{uri: 'file:///android_asset/build/index.html'}}
    //   style={{flex: 1}}
    //   javaScriptEnabled={true}
    //   domStorageEnabled={true}
    // />

    // <WebView
    //   source={{uri: 'http://localhost:3000/'}}
    //   style={{flex: 1}}
    // />
    <WebView
      source={{
        html: ` 
        <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="file:///android_asset/build/angular-element.js"></script>
          <link rel="stylesheet" href="file:///android_asset/build/styles.css" />
        </head>
        <body>
          <div id="root"></div>
          <div className="App">
            <po-button onclick="sendDataToReactNativeApp()"
              p-label="Teste no index"
              p-disabled="false"
            >
            </po-button>
          </div>
          <style>
          .po-button{
            width: 200px;
          }
          </style>
          <script>
          const sendDataToReactNativeApp = () => {
            window.alert(window);
            console.log('entendendo o que vem no window: ', window);
          };
          </script>
        </body>
      </html>`,
      }}
    />
  );
}
