import React, { useRef } from 'react';
import {
  View, StyleSheet, Text, Linking,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

interface BarcodeProps {
  barcodes: [],
}
interface RenderBarcodeProps {
  bounds: Object,
  data: Object
}
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

export const BarcodeScanner = () => {
  const [barcodesRead, setBarcodes] = React.useState([]);
  const cameraRef = useRef(null);

  function barcodeRecognized(props: BarcodeProps) {
    setBarcodes(props.barcodes);
  }

  function openURL(url: string) {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  function renderBarcode(props: RenderBarcodeProps) {
    const { data, bounds } = props;
    return (
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
            onPress={() => openURL('https://apps.apple.com/sg/app/mocha-tn5250/id521454323?mt=12')}
          >
            open app
          </Text>
        </View>
      </React.Fragment>
    );
  }

  function renderBarcodes() {
    return (
      <View>{(barcodesRead && barcodesRead.length !== 0) && barcodesRead.map(renderBarcode)}</View>
    );
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.scanner}
        onGoogleVisionBarcodesDetected={barcodeRecognized}
      >
        {renderBarcodes()}
      </RNCamera>
    </View>
  );
};
