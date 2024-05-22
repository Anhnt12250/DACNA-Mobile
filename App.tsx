import { useEffect, useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

// Themes
import themes from "src/themes/themes";

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

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={themes.Custom}>
        <NavigationContainer theme={themes.Combined}>
          <Wrapper />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
