import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";

import globalStyles from "@components/styles.css";

export default function QRScannerScreen() {
  const device = useCameraDevice("back");
  const { hasPermission } = useCameraPermission();

  if (!hasPermission) {
    return (
      <View style={globalStyles.container}>
        <Text>Camera permission is required to scan QR codes.</Text>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={globalStyles.container}>
        <Text>Camera not available.</Text>
      </View>
    );
  }

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  return (
    <View style={globalStyles.container}>
      <Camera {...codeScanner} device={device} isActive={true} style={StyleSheet.absoluteFill} />
    </View>
  );
}
