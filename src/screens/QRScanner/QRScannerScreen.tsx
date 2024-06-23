import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { Camera, CameraType } from "react-native-camera-kit";
import { Button, Dialog, Portal, Text } from "react-native-paper";

function DialogError(props: any) {
  const { error, visible, refreshQR } = props;

  const [visibleError, setVisibleError] = useState(false);
  const showDialogError = () => setVisibleError(true);
  const hideDialogError = () => setVisibleError(false);

  useEffect(() => {
    if (visible) {
      showDialogError();
    }
  }, [visible]);

  const handleOnCheckInError = () => {
    hideDialogError();
    refreshQR();
  };

  return (
    <Dialog visible={visibleError} onDismiss={hideDialogError}>
      <Dialog.Title>Error</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyMedium">{error}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={handleOnCheckInError}>Close</Button>
      </Dialog.Actions>
    </Dialog>
  );
}

export default function QRScannerScreen(props: any) {
  const { navigation } = props;

  const [qr, setQr] = useState<string>("");
  const [isValidQR, setIsValidQR] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setQr("");
    });

    return unsubscribe;
  }, [navigation]);

  const handleOnScanned = (qr: string) => {
    const [action, id] = qr.split(":");
    if (action === "checkin") {
      navigation.navigate("CheckIn", { id });
      setQr(qr);
    } else {
      setIsValidQR(true);
    }
  };

  const refreshQR = () => {
    setQr("");
    setIsValidQR(false);
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      {!qr && (
        <Camera
          style={StyleSheet.absoluteFill}
          cameraType={CameraType.Back}
          scanBarcode={true}
          onReadCode={(event: any) => {
            handleOnScanned(event.nativeEvent.codeStringValue);
          }}
          showFrame={true}
          laserColor="transparent"
          frameColor="white"
        />
      )}
      <Portal>
        <DialogError error="Invalid QR code" visible={isValidQR} refreshQR={refreshQR} />
      </Portal>
    </View>
  );
}
