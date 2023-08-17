import React, {useRef, Component, useState, useEffect} from 'react';
import {Text, Button, View, Alert, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  // return <RenderHtml contentWidth={width} source={source} />;
  let labelButton = 'Label do botão';
  let textContent!: string;

  const webViewRef = useRef(null)as any;

  const sendPropsToWebView = (props: any) => {
    if (webViewRef.current) {
      webViewRef.current.postMessage(JSON.stringify(props));
    }
  };

  function onMessage(data: any) {
    if (data?.nativeEvent?.data) {
      textContent = data?.nativeEvent?.data;
    } else {
      Alert.alert(textContent);
    }
  }

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

    <SafeAreaView style={{flex: 1}}>
      <View>
        <Button
          onPress={onMessage}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about purple button"
        />
      </View>

      <WebView
        onMessage={onMessage}
        scalesPageToFit={false}
        mixedContentMode="compatibility"
        onLoad={() => sendPropsToWebView({ myProp: 'someValue' })}
        ref={webViewRef}
        source={{
          html: ` 
          <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="file:///android_asset/build/angular-element.js"></script>
          <link rel="stylesheet" href="file:///android_asset/build/styles.css" />
        </head>
        <body style="margin-top: 30px">
          <div id="root"></div>
          <div className="App">
            <po-button onclick="sendDataToReactNativeApp()"
              p-label="Label botão"
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
            console.log('entendendo o que vem no window: ', window);
            window.ReactNativeWebView.postMessage('Valor de dentro do WebView');
          };

          window.addEventListener('message', event => {
            const data = JSON.parse(event.data);
            // Use os dados recebidos para atualizar o conteúdo dentro da WebView
          });
          </script>
        </body>
      </html>`,
        }}
      />
    </SafeAreaView>
  );
}
