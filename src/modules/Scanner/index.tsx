/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class BarcodeScanner extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text
            style={{
              color: 'gray',
              fontSize: 30,
            }}
          >
            Please Scan
          </Text>
        </View>
        <View
          style={
            {
              width: '100%',
              height: '75%',
              backgroundColor: 'green',
            }
          }
        >
          <RNCamera
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default BarcodeScanner;
