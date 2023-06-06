import React from 'react';
import { WebView } from 'react-native-webview';
const myHtmlFile = require('./build/index.html')
export default function App() {
  return <WebView source={myHtmlFile} style={{ flex: 1 }} />;
}