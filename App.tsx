import React from 'react';
import WebView from 'react-native-webview';

export default function App() {
  // return <RenderHtml contentWidth={width} source={source} />;
  const PolicyHTML = require('./build/index.html');
  return (
    // <WebView
    //   originWhitelist={['*']}
    //   source={{uri: 'file:///android_asset/build/index.html'}}
    //   style={{flex: 1}}
    //   javaScriptEnabled={true}
    //   domStorageEnabled={true}
    // />

    <WebView
      source={{uri: 'http://localhost:3000/'}}
      style={{flex: 1}}
    />
  );
}
