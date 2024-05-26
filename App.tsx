import { useEffect, useState, useCallback, useMemo } from "react";
import { Appearance } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";

// Themes
import { PreferencesContext, ThemeMode } from "@themes/ThemeContext";

// App Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Component Imports
import { PaperProvider } from "react-native-paper";

// Store
import store, { AppDispatch, RootState } from "./src/redux/store";

// redux
import { AuthActions } from "@redux/auth/AuthSlice";

// Page Navigation
import MainNavigation from "./src/nagivation/MainNavigation";
import AuthenticationNavigation from "./src/nagivation/AuthenticationNavigation";

// Components
import Loading from "./src/components/Loading";

function Wrapper() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuth);

  const [isInitialized, setIsInitialized] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    await dispatch(AuthActions.checkUserSessionAsync());
    setIsInitialized(true);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isInitialized ? (
        isLoggedIn ? (
          <Stack.Screen name="MainNavigation" component={MainNavigation} />
        ) : (
          <Stack.Screen name="AuthenticationNavigation" component={AuthenticationNavigation} />
        )
      ) : (
        <Stack.Screen name="Loading" component={Loading} />
      )}
    </Stack.Navigator>
  );
}

import themes, { changeTheme } from "@themes/themes";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("system");
  const sysScheme = Appearance.getColorScheme();

  let themeCustom = sysScheme === "dark" ? themes.dark.Custom : themes.light.Custom;
  let themeCombined = sysScheme === "dark" ? themes.dark.Combined : themes.light.Combined;

  useEffect(() => {
    if (currentTheme === "system") {
      themeCustom = sysScheme === "dark" ? themes.dark.Custom : themes.light.Custom;
      themeCombined = sysScheme === "dark" ? themes.dark.Combined : themes.light.Combined;
    } else {
      themeCustom = currentTheme === "dark" ? themes.dark.Custom : themes.light.Custom;
      themeCombined = currentTheme === "dark" ? themes.dark.Combined : themes.light.Combined;
    }
  }, [currentTheme]);

  const changeTheme = useCallback(
    (mode: ThemeMode) => {
      return setCurrentTheme(mode);
    },
    [currentTheme]
  );

  const preferences = useMemo(
    () => ({
      changeTheme,
      currentTheme,
    }),
    [changeTheme, currentTheme]
  );

  return (
    <Provider store={store}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={themeCustom}>
          <NavigationContainer theme={themeCombined}>
            <Wrapper />
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
}
