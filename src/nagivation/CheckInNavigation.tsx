//Navigations
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//Screens
import QRScannerScreen from "@screens/QRScanner/QRScannerScreen";

export default function CheckInNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="QRScanner">
      <Stack.Screen name="QRScanner" component={QRScannerScreen} />
    </Stack.Navigator>
  );
}
