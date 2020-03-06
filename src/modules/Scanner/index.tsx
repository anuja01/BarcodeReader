/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Linking,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  scanner: {
    flex: 1,
    width: '100%',
  },
});
class BarcodeScanner extends Component {
  state = {
    barcodes: [],
  }

  barcodeRecognized = ({ barcodes }) => {
    this.setState({ barcodes });
  }

  openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  renderBarcode = ({ bounds, data }) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 10,
          position: 'absolute',
          borderColor: '#F00',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          height: bounds.size.height,
          width: bounds.size.width + 50,
          left: bounds.origin.x,
          top: bounds.origin.y,
        }}
      >
        <Text
          style={{
            color: '#F00',
            flex: 1,
            position: 'absolute',
            textAlign: 'center',
            backgroundColor: 'transparent',
          }}
          onPress={() => this.openURL('https://apps.apple.com/sg/app/mocha-tn5250/id521454323?mt=12')}
        >
          open app
        </Text>
      </View>
    </React.Fragment>
  );

  renderBarcodes = () => {
    const { barcodes } = this.state;
    return (
      <View>{barcodes.map(this.renderBarcode)}</View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.scanner}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        >
          {this.renderBarcodes()}
        </RNCamera>
      </View>
    );
  }
}

export default BarcodeScanner;
