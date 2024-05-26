import { FAB, Portal } from "react-native-paper";

// Navigations
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

// Screens
import HomeScreen from "@screens/Home/HomeScreen";
import MyRequestScreen from "@screens/MyRequest/MyRequestScreen";
import SettingScreen from "@screens/Setting/SettingScreen";

// Tab Navigator
const Tab = createMaterialBottomTabNavigator();

const BOTTOM_TABS = [
  { name: "Home", icon: "home", component: HomeScreen },
  { name: "My Request", icon: "clipboard-list", component: MyRequestScreen },
  { name: "Settings", icon: "cog", component: SettingScreen },
];

export default function MainNavigation(props: any) {
  const navigateToCheckIn = () => {
    props.navigation.navigate("CheckInNavigation");
  };

  return (
    <Portal.Host>
      <Tab.Navigator>
        {BOTTOM_TABS.map((tab, index) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{ tabBarIcon: tab.icon }}
          />
        ))}
      </Tab.Navigator>
      <FAB
        style={{ position: "absolute", margin: 16, right: 0, bottom: 90 }}
        icon="qrcode-scan"
        onPress={() => navigateToCheckIn()}
      />
    </Portal.Host>
  );
}
