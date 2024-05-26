import { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Text, SegmentedButtons } from "react-native-paper";

import globalStyles from "@components/styles.css";

import { PreferencesContext } from "@themes/ThemeContext";

export default function SettingScreen() {
  const { changeTheme } = useContext(PreferencesContext);

  const [mode, setMode] = useState("system");

  useEffect(() => {
    changeTheme(mode as "light" | "dark" | "system");
  }, [mode]);

  return (
    <View style={[globalStyles.screen, { padding: 20 }]}>
      <View>
        <Text style={globalStyles.screenTitle}>Settings</Text>
      </View>

      <View>
        <View>
          <SegmentedButtons
            value={mode}
            onValueChange={setMode}
            buttons={[
              { label: "Light", value: "light", icon: "weather-sunny" },
              { label: "Dark", value: "dark", icon: "weather-night" },
              { label: "System", value: "system", icon: "cellphone" },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
